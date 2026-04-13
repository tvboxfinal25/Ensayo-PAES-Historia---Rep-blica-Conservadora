import React from 'react';
import { motion } from 'motion/react';
import { Student } from '../types';

interface WelcomeScreenProps {
  student: Student;
  setStudent: (student: Student) => void;
  onStart: (e: React.FormEvent) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ student, setStudent, onStart }) => {
  return (
    <motion.div 
      key="welcome"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-[2.5rem] shadow-xl p-10 text-center border border-slate-100"
    >
      <div className="bg-amber-50 text-amber-600 inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Modo examen activado
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-none">
        República <span className="text-indigo-600">Conservadora</span>
      </h2>
      <p className="text-slate-500 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
        Las preguntas y sus alternativas se presentan en <strong>orden aleatorio</strong> en cada intento. Analiza cada fuente antes de responder.
      </p>
      <form onSubmit={onStart} className="max-w-sm mx-auto space-y-4">
         <input 
            required
            className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-600 outline-none font-bold"
            placeholder="Nombre del Estudiante"
            value={student.name}
            onChange={e => setStudent({...student, name: e.target.value})}
         />
         <select 
            required
            className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-600 outline-none font-bold appearance-none cursor-pointer"
            value={student.course}
            onChange={e => setStudent({...student, course: e.target.value})}
         >
            <option value="">Seleccionar curso...</option>
            <option value="4° Medio A">4° Medio A</option>
            <option value="4° Medio B">4° Medio B</option>
            <option value="Preuniversitario">Preuniversitario</option>
         </select>
         <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-indigo-600 transition-all text-lg shadow-xl shadow-indigo-100">
           Comenzar Evaluación
         </button>
      </form>
    </motion.div>
  );
};
