import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getImageUrl } from '../lib/utils';

interface ImageOverlayProps {
  imageUrl: string;
  periodo: string;
  onClose: () => void;
}

export const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, periodo, onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/98 z-[200] flex flex-col items-center justify-center p-6">
      <button onClick={onClose} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
        <ChevronRight className="rotate-45" size={48} />
      </button>
      <img 
        src={getImageUrl(imageUrl)} 
        className="max-w-4xl w-full h-auto rounded-3xl shadow-2xl border-4 border-white/5" 
        alt="Large View"
        referrerPolicy="no-referrer"
      />
      <p className="text-white/60 mt-8 font-black uppercase tracking-[0.3em] text-sm">{periodo}</p>
    </div>
  );
};
