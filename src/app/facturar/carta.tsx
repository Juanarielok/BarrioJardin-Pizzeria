import { escribirLocalStorage } from "../localStorageService";
  var preciosign = "PRECIO";
  export const comidas = [
   {
     titulo: 'MUZZARELLA CLASICA GRANDE',
     subtitulo: 'Pizza clasica de muzzarella',
     imagen: './muzza1.png',
     tituloAbajo: preciosign,
     precio: '$7.000,00',
   },
   {
     titulo: 'EMPANADA DE CARNE',
     subtitulo: 'Empanadas de carne cortadas a cuchillo',
     imagen: './emp1.png',
     tituloAbajo: preciosign,
     precio: '$970,00',
   },
   {
     titulo: 'LOMITO CLASICO',
     subtitulo: 'Sanguche de lomito, con jamon, queso y pan pebete',
     imagen: './lomo1.png',
     tituloAbajo: preciosign,
     precio: '$6.000,00',
   },
 ];

 escribirLocalStorage(comidas[0].titulo,"pepiton");