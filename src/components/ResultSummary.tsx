import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Home, Target, AlertCircle, Download } from 'lucide-react';
import { Student, QuizResult } from '../types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ResultSummaryProps {
  student: Student;
  score: number;
  totalQuestions: number;
  axisPerformance: Record<string, { correct: number; total: number }>;
  onRestart: () => void;
  fullResult?: QuizResult;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({ 
  student, 
  score, 
  totalQuestions, 
  axisPerformance,
  onRestart,
  fullResult
}) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFillColor(30, 41, 59); // Slate 900
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('INFORME DE EVALUACIÓN PAES', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('HISTORIA DE CHILE: PERIODO CONSERVADOR (1831-1861)', pageWidth / 2, 30, { align: 'center' });

    // Student Info
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(12);
    doc.text(`Estudiante: ${student.name}`, 14, 55);
    doc.text(`Curso: ${student.course}`, 14, 62);
    doc.text(`Fecha: ${fullResult?.date || new Date().toLocaleString()}`, 14, 69);
    doc.text(`Tiempo de realización: ${fullResult?.duration || 'N/A'}`, 14, 76);

    // Score Box
    doc.setDrawColor(79, 70, 229); // Indigo 600
    doc.setLineWidth(0.5);
    doc.rect(140, 50, 55, 30);
    doc.setFontSize(10);
    doc.text('PUNTAJE TOTAL', 167.5, 60, { align: 'center' });
    doc.setFontSize(20);
    doc.text(`${score}/${totalQuestions}`, 167.5, 72, { align: 'center' });

    // Axis Performance Table
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Rendimiento por Ejes Temáticos', 14, 95);

    const axisData = Object.entries(axisPerformance).map(([axis, data]) => {
      const perf = data as { correct: number; total: number };
      return [
        axis,
        `${perf.correct}/${perf.total}`,
        `${Math.round((perf.correct / perf.total) * 100)}%`
      ];
    });

    autoTable(doc, {
      startY: 100,
      head: [['Eje Temático', 'Correctas', 'Logro']],
      body: axisData,
      theme: 'striped',
      headStyles: { fillColor: [79, 70, 229] }
    });

    // Detailed Answers
    if (fullResult?.details) {
      doc.addPage();
      doc.setFontSize(16);
      doc.text('Detalle de Respuestas', 14, 20);

      const detailsData = fullResult.details.map((d, i) => [
        i + 1,
        d.question,
        d.selected,
        d.correct,
        d.isCorrect ? 'Correcta' : 'Incorrecta'
      ]);

      autoTable(doc, {
        startY: 25,
        head: [['#', 'Pregunta', 'Tu Respuesta', 'Correcta', 'Estado']],
        body: detailsData,
        columnStyles: {
          0: { cellWidth: 10 },
          1: { cellWidth: 80 },
          2: { cellWidth: 40 },
          3: { cellWidth: 40 },
          4: { cellWidth: 20 }
        },
        styles: { fontSize: 8 },
        didParseCell: (data) => {
          if (data.section === 'body' && data.column.index === 4) {
            if (data.cell.raw === 'Correcta') {
              data.cell.styles.textColor = [5, 150, 105]; // Emerald 600
            } else {
              data.cell.styles.textColor = [225, 29, 72]; // Rose 600
            }
          }
        }
      });
    }

    doc.save(`Informe_PAES_${student.name.replace(/\s+/g, '_')}.pdf`);
  };

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

       <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={downloadPDF}
            className="bg-indigo-600 text-white font-black px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl"
          >
            <Download size={20} /> Descargar Informe PDF
          </button>
          <button 
            onClick={onRestart}
            className="bg-slate-900 text-white font-black px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl"
          >
            <Home size={20} /> Volver al Inicio
          </button>
       </div>
    </motion.div>
  );
};
