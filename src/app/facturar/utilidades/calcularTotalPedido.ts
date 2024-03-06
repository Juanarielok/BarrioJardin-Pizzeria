import { comidas } from "../carta";

export default function calcularTotalPedido(facturita: number[]): number {
  let total = 0;

  for (let i = 0; i < comidas.length; i++) {
    total += facturita[i] * comidas[i].precio;
  }

  return total;
}
