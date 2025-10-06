// src/components/LazyPrinciplesLoader.jsx
import { Suspense } from 'react';

// Componente de loading
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-gray-600">Carregando dados...</span>
    </div>
  );
}

// Wrapper para carregar os dados com lazy loading
export function LazyPrinciplesLoader({ children }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}

export default LazyPrinciplesLoader;