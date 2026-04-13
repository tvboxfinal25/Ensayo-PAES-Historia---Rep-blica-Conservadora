import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Home, Target, AlertCircle } from 'lucide-react';
import { Student } from '../types';

interface ResultSummaryProps {
  student: Student;
  score: number;
  totalQuestions: number;
  axisPerformance: Record<string, { correct: number; total: number }>;
  onRestart: () => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({ 
  student, 
  score, 
  totalQuestions, 
  axisPerformance,
  onRestart 
}) => {
  return (
    <motion.div 
      key="summary"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100"
    >
       <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
       </div>
       <h2 className="text-4xl font-black text-slate-900 mb-2 text-center">Evaluación Finalizada</h2>
       <p className="text-slate-400 font-bold mb-10 text-center">{student.name} • {student.course}</p>
       
       <div className="flex flex-col md:flex-row gap-6 justify-center max-w-xl mx-auto mb-12">
          <div className="flex-1 bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 text-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200 block mb-2">Puntaje PAES</span>
             <p className="text-6xl font-black">{score}<span className="text-2xl opacity-40">/{totalQuestions}</span></p>
          </div>
          <div className="flex-1 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Logro Total</span>
             <p className="text-6xl font-black text-slate-800">{Math.round((score/totalQuestions)*100)}%</p>
          </div>
       </div>

       {/* REPORTE POR EJES */}
       <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-6">
             <Target className="text-indigo-600" size={20} />
             <h3 className="font-black text-lg uppercase tracking-tight">Reporte por Ejes Temáticos</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
             {Object.entries(axisPerformance).map(([axis, data]) => {
                const perf = data as { correct: number; total: number };
                const percentage = Math.round((perf.correct / perf.total) * 100);
                return (
                   <div key={axis} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex justify-between items-center mb-3">
                         <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{axis}</span>
                         <span className={`text-xs font-black ${percentage >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {percentage}%
                         </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${percentage}%` }}
                           className={`h-full ${percentage >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                         />
                      </div>
                      <p className="text-[9px] text-slate-400 mt-2 font-bold uppercase">
                         {perf.correct} de {perf.total} correctas
                      </p>
                   </div>
                );
             })}
          </div>
          
          <div className="mt-8 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex gap-4 items-start">
             <AlertCircle className="text-indigo-600 shrink-0" size={20} />
             <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Sugerencia Pedagógica:</strong> {score >= totalQuestions * 0.8 
                ? "¡Excelente desempeño! Estás listo para profundizar en el periodo Liberal." 
                : "Te recomendamos reforzar los ejes con menor puntaje revisando los recursos iconográficos y las explicaciones de cada pregunta."}
             </p>
          </div>
       </div>

       <button 
         onClick={onRestart}
         className="bg-slate-900 text-white font-black px-12 py-5 rounded-2xl flex items-center gap-3 mx-auto hover:bg-indigo-600 transition-all shadow-xl"
       >
         <Home size={20} /> Volver al Inicio
       </button>
    </motion.div>
  );
};
