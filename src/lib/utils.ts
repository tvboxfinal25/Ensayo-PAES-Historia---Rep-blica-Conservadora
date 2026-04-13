// --- FUNCIÓN PARA PROCESAR IMÁGENES (Asegura unicidad y evita bloqueos) ---
export const getImageUrl = (url: string) => {
  if (!url) return 'https://picsum.photos/seed/chile-history/400/300';
  
  // Generamos un hash simple para asegurar un seed único por URL
  // Evitamos btoa() porque falla con caracteres especiales (acentos, ñ)
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = ((hash << 5) - hash) + url.charCodeAt(i);
    hash |= 0; // Convertir a entero de 32 bits
  }
  const seed = Math.abs(hash).toString();
  const fallback = `https://picsum.photos/seed/${seed}/400/300`;
  
  // Usamos weserv.nl como proxy pero con un fallback único por cada URL
  // Esto garantiza que si el proxy falla, la imagen de respaldo sea distinta para cada pregunta
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=${encodeURIComponent(fallback)}`;
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
