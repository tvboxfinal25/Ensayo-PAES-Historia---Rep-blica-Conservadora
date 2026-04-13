import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { rawQuizData } from './data/quizData';
import { Question, QuizResult, Student } from './types';
import { shuffle } from './lib/utils';
import { db, resultsCollection, resultsQuery } from './lib/firebase';
import { addDoc, onSnapshot } from 'firebase/firestore';

// Components
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizEngine } from './components/QuizEngine';
import { ResultSummary } from './components/ResultSummary';
import { TeacherDashboard } from './components/TeacherDashboard';
import { ImageOverlay } from './components/ImageOverlay';

// --- PREPARACIÓN DE DATOS ALEATORIOS ---
const prepareQuiz = (): Question[] => {
  const shuffledQuestions = shuffle(rawQuizData);
  return shuffledQuestions.map(q => ({
    ...q,
    opciones: shuffle(q.opciones)
  }));
};

export default function App() {
  const [gameState, setGameState] = useState<'welcome' | 'quiz' | 'summary' | 'dashboard'>('welcome');
  const [student, setStudent] = useState<Student>({ name: '', course: '' });
  const [quizSet, setQuizSet] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [showImageFull, setShowImageFull] = useState(false);

  useEffect(() => {
    // Escuchar cambios en tiempo real desde Firestore
    const unsubscribe = onSnapshot(resultsQuery, (snapshot) => {
      const docs = snapshot.docs.map(doc => doc.data() as QuizResult);
      setResults(docs);
    }, (error) => {
      console.error("Error al cargar resultados:", error);
    });

    return () => unsubscribe();
  }, []);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (student.name && student.course) {
      setQuizSet(prepareQuiz());
      setCurrentIdx(0);
      setScore(0);
      setSelected(null);
      setIsAnswered(false);
      setUserAnswers([]);
      setGameState('quiz');
    }
  };

  const checkAnswer = () => {
    if (selected === null) return;
    setIsAnswered(true);
    const question = quizSet[currentIdx];
    const isCorrect = question.opciones[selected] === question.correcta;
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const next = async () => {
    if (currentIdx < quizSet.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setIsAnswered(false);
    } else {
      // Calcular rendimiento por eje
      const axisPerformance: Record<string, { correct: number; total: number }> = {};
      
      quizSet.forEach((q, index) => {
        if (!axisPerformance[q.eje]) {
          axisPerformance[q.eje] = { correct: 0, total: 0 };
        }
        axisPerformance[q.eje].total += 1;
        if (userAnswers[index]) {
          axisPerformance[q.eje].correct += 1;
        }
      });

      const finalScore = score;
      const newResult: QuizResult = {
        ...student,
        score: finalScore,
        axisPerformance,
        date: new Date().toLocaleString()
      };
      
      try {
        // Guardar en Firestore
        await addDoc(resultsCollection, newResult);
      } catch (error) {
        console.error("Error al guardar el resultado:", error);
      }
      
      setGameState('summary');
    }
  };

  const restart = () => {
    setGameState('welcome');
    setStudent({ name: '', course: '' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <Header onViewResults={() => setGameState('dashboard')} />

        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <WelcomeScreen 
              student={student} 
              setStudent={setStudent} 
              onStart={handleStart} 
            />
          )}

          {gameState === 'quiz' && quizSet.length > 0 && (
            <QuizEngine 
              quizSet={quizSet}
              currentIdx={currentIdx}
              student={student}
              selected={selected}
              setSelected={setSelected}
              isAnswered={isAnswered}
              onCheckAnswer={checkAnswer}
              onNext={next}
              onShowImageFull={() => setShowImageFull(true)}
            />
          )}

          {gameState === 'summary' && (
            <ResultSummary 
              student={student}
              score={score}
              totalQuestions={quizSet.length}
              axisPerformance={results[0]?.axisPerformance || {}}
              onRestart={restart}
            />
          )}

          {gameState === 'dashboard' && (
            <TeacherDashboard 
              results={results}
              onBack={() => setGameState('welcome')}
            />
          )}
        </AnimatePresence>

        {showImageFull && quizSet[currentIdx] && (
          <ImageOverlay 
            imageUrl={quizSet[currentIdx].imagen}
            periodo={quizSet[currentIdx].periodo}
            onClose={() => setShowImageFull(false)}
          />
        )}

      </div>
    </div>
  );
}
