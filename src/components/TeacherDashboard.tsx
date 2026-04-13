import React from 'react';
import { motion } from 'motion/react';
import { QuizResult } from '../types';

interface TeacherDashboardProps {
  results: QuizResult[];
  onBack: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ results, onBack }) => {
  return (
    <motion.div 
      key="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900">Panel de Resultados</h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Historial de evaluaciones de estudiantes</p>
         </div>
         <button onClick={onBack} className="bg-slate-100 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200">Volver al Inicio</button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
         <div className="overflow-x-auto">
           <table className="w-full text-left">
             <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
               <tr>
                  <th className="px-10 py-6">Estudiante</th>
                  <th className="px-10 py-6">Curso</th>
                  <th className="px-10 py-6">Puntaje</th>
                  <th className="px-10 py-6">Efectividad</th>
                  <th className="px-10 py-6">Fecha</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100 font-medium">
               {results.map((r, i) => (
                 <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                   <td className="px-10 py-6 text-slate-900 font-black">{r.name}</td>
                   <td className="px-10 py-6 text-slate-500">{r.course}</td>
                   <td className="px-10 py-6 text-indigo-600 font-black">{r.score} / 30</td>
                   <td className="px-10 py-6">
                      <div className="flex items-center gap-3">
                         <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${r.score >= 18 ? 'bg-emerald-400' : 'bg-rose-400'}`} style={{width: `${(r.score/30)*100}%`}}></div>
                         </div>
                         <span className="text-[10px] font-black">{Math.round((r.score/30)*100)}%</span>
                      </div>
                   </td>
                   <td className="px-10 py-6 text-slate-400 text-[10px] uppercase">{r.date}</td>
                 </tr>
               ))}
               {results.length === 0 && (
                 <tr><td colSpan={5} className="py-20 text-center text-slate-300 font-black uppercase tracking-widest">Sin datos registrados</td></tr>
               )}
             </tbody>
           </table>
         </div>
      </div>
    </motion.div>
  );
};
