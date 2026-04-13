import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Eye, Info, ChevronRight } from 'lucide-react';
import { Question, Student } from '../types';
import { getImageUrl } from '../lib/utils';

interface QuizEngineProps {
  quizSet: Question[];
  currentIdx: number;
  student: Student;
  selected: number | null;
  setSelected: (idx: number) => void;
  isAnswered: boolean;
  onCheckAnswer: () => void;
  onNext: () => void;
  onShowImageFull: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  quizSet,
  currentIdx,
  student,
  selected,
  setSelected,
  isAnswered,
  onCheckAnswer,
  onNext,
  onShowImageFull
}) => {
  const currentQuestion = quizSet[currentIdx];

  return (
    <motion.div 
      key="quiz"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid lg:grid-cols-12 gap-8"
    >
       {/* RECURSO */}
       <div className="lg:col-span-5">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 sticky top-10 shadow-sm">
             <div className="flex items-center gap-2 mb-4 text-indigo-600">
                <BookOpen size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">{currentQuestion.tipo}</span>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600 mb-6">
                <p className="text-slate-700 italic font-serif text-lg leading-relaxed">
                  "{currentQuestion.recurso}"
                </p>
             </div>
             <div className="relative group overflow-hidden rounded-2xl cursor-zoom-in shadow-md bg-slate-100" onClick={onShowImageFull}>
                <img 
                  src={getImageUrl(currentQuestion.imagen)} 
                  className="w-full h-56 object-cover transition-transform group-hover:scale-110" 
                  alt="Recurso"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Eye size={16}/> Ampliar</span>
                </div>
             </div>
             <p className="text-[9px] text-slate-400 mt-3 text-center uppercase tracking-tighter">Imagen referencial • Museo Histórico Nacional</p>
          </div>
       </div>

       {/* PREGUNTA */}
       <div className="lg:col-span-7">
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
             <div className="bg-slate-900 p-5 text-white flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span>{student.name}</span>
                <span className="bg-indigo-600 px-4 py-1 rounded-full">Pregunta {currentIdx + 1} / {quizSet.length}</span>
             </div>
             
             <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-10 leading-tight">
                  {currentQuestion.pregunta}
                </h3>

                <div className="space-y-4">
                  {currentQuestion.opciones.map((opt, i) => (
                     <button
                       key={i}
                       disabled={isAnswered}
                       onClick={() => setSelected(i)}
                       className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-start gap-4 group ${
                         isAnswered 
                         ? opt === currentQuestion.correcta 
                           ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold' 
                           : selected === i ? 'bg-rose-50 border-rose-500 text-rose-900' : 'opacity-40 border-slate-100'
                         : selected === i ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-100 hover:border-slate-300'
                       }`}
                     >
                       <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-black text-xs ${
                         isAnswered && opt === currentQuestion.correcta ? 'bg-emerald-500 text-white' :
                         selected === i ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                       }`}>
                          {String.fromCharCode(65 + i)}
                       </div>
                       <span className="pt-1.5 leading-snug">{opt}</span>
                     </button>
                  ))}
                </div>

                <div className="mt-12">
                  {!isAnswered ? (
                    <button 
                      disabled={selected === null}
                      onClick={onCheckAnswer}
                      className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-100 disabled:opacity-20 hover:bg-indigo-700 transition-all text-lg uppercase tracking-widest"
                    >
                      Responder
                    </button>
                  ) : (
                    <div className="space-y-6">
                       <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 flex gap-4">
                          <Info className="text-indigo-600 shrink-0 mt-1" size={20} />
                          <div className="text-slate-600 text-sm leading-relaxed">
                             <strong className="text-indigo-700 uppercase text-[10px] font-black block mb-1">Contexto Pedagógico:</strong>
                             {currentQuestion.explicacion}
                          </div>
                       </div>
                       <button onClick={onNext} className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-2 text-lg uppercase tracking-widest">
                          {currentIdx < quizSet.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Examen'} <ChevronRight size={20}/>
                       </button>
                    </div>
                  )}
                </div>
             </div>
          </div>
       </div>
    </motion.div>
  );
};
