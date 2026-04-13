// --- FUNCIÓN PARA PROCESAR IMÁGENES (Proxy para evitar problemas de Referrer/CORS) ---
export const getImageUrl = (url: string) => {
  if (!url) return '';
  // Usamos weserv.nl como proxy para asegurar la carga de imágenes de Wikimedia
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=https://picsum.photos/seed/history/400/300`;
};

// --- FUNCIÓN PARA DESORDENAR (SHUFFLE) ---
export const shuffle = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
