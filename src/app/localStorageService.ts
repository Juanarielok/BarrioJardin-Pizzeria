

export function escribirLocalStorage<T> (valor : T, clave : string) {
    const valorEnTexto = JSON.stringify(valor);
    localStorage.setItem(clave, valorEnTexto);
 }

 export function leerLocalStorage<T>(clave: string): T | null {
    if (typeof localStorage === 'undefined') {
      console.error('localStorage is not available in this environment.');
      return null;
    }
  
    const valorEnTexto = localStorage.getItem(clave) || '';
    return JSON.parse(valorEnTexto);
  }