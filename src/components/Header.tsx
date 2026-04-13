import React from 'react';
import { History, BarChart3, LogIn, LogOut } from 'lucide-react';
import { auth, loginWithGoogle } from '../lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

interface HeaderProps {
  onViewResults: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onViewResults }) => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="flex justify-between items-center mb-8 bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg">
            <History size={22} />
        </div>
        <h1 className="font-black text-lg tracking-tighter leading-tight">
            PAES HISTORIA <br/>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Ensayo Aleatorio</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-6">
        {user ? (
          <div className="flex items-center gap-4">
            <button 
              onClick={onViewResults}
              className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <BarChart3 size={16} /> Ver Resultados
            </button>
            <button 
              onClick={() => signOut(auth)}
              className="flex items-center gap-2 text-[10px] font-black uppercase text-rose-400 hover:text-rose-600 transition-colors"
            >
              <LogOut size={16} /> Salir
            </button>
          </div>
        ) : (
          <button 
            onClick={loginWithGoogle}
            className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <LogIn size={16} /> Acceso Docente
          </button>
        )}
      </div>
    </header>
  );
};
