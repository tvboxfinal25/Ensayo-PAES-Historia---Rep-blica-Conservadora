export interface Question {
  id: number;
  periodo: string;
  eje: 'Institucionalidad' | 'Economía' | 'Cultura' | 'Territorio';
  tipo: string;
  recurso: string;
  pregunta: string;
  opciones: string[];
  correcta: string;
  explicacion: string;
  imagen: string;
}

export interface Student {
  name: string;
  course: string;
}

export interface QuizResult extends Student {
  score: number;
  axisPerformance?: Record<string, { correct: number; total: number }>;
  date: string;
  duration?: string;
  details?: {
    question: string;
    selected: string;
    correct: string;
    isCorrect: boolean;
    eje: string;
  }[];
}
