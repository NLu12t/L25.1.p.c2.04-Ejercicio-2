/**
 * ENUNCIADO :
 * Una tienda planea incrementar el 20% del costo para establecer
 * el precio de venta de sus artículos (1=ropa, 2=víveres),
 * conociendo su nombre y costo. Para la ropa de color rojo
 * (1=blanco, 2=azul, 3=rojo) otorgará un 10% de descuento.
 * Los víveres no tienen descuento, pero si es un producto básico,
 * sólo aplicará un 5% del costo para la ganancia.
 * SALIDA :
 * nombre tipo costo color basico %Ganancia() %Descuento() precio()
 * Leche    2   10    n/a    SI          5       0         10,50
 * Camisa   1   20    2      n/a         20      0         24,00
 * Short    1   20    3      n/a         20      10        22,00
 * Toddy    2   30    n/a    NO          20      0         36,00
 * Blusa    1   40    3      n/a         20      10        44,00
 * */

import Cl_ropa from "./Cl_ropa.js";
import Cl_viveres from "./Cl_viveres.js";

let viveres1 = new Cl_viveres("Leche", 2, 10, "SI");
let ropa1 = new Cl_ropa("Camisa", 1, 20, 2);
let ropa2 = new Cl_ropa("Short", 1, 20, 3);
let viveres2 = new Cl_viveres("Toddy", 2, 30, "NO");
let ropa3 = new Cl_ropa("Blusa", 1, 40, 3);

let salida = document.getElementById("salida");

salida.innerHTML = `
 <table>
  <tr>
    <th>Nombre</th>
    <th>Tipo</th>
    <th>Costo</th>
    <th>Color</th>
    <th>Basico</th>
    <th>%Ganancia()</th>
    <th>%Descuento()</th>
    <th>Precio()</th>
  </tr>
    ${viveres1.mostrar()}
    ${ropa1.mostrar()}
    ${ropa2.mostrar()}
    ${viveres2.mostrar()}
    ${ropa3.mostrar()}
 </table> `;
