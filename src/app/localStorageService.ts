export function escribirLocalStorage<T> (valor : T, clave : string) {
    const valorEnTexto = JSON.stringify(valor);
    if (typeof window !== 'undefined') {
      localStorage.setItem(clave, valorEnTexto);
    }
 }

 export function leerLocalStorage<T>(clave: string) : T {
  const valorenTexto = localStorage.getItem(clave) || '';
  return JSON.parse(valorenTexto)
 }
  