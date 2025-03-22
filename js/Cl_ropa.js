import Cl_articulo from "./Cl_articulo.js";

export default class Cl_ropa extends Cl_articulo {
  constructor(nombre, tipo, costo, color) {
    super(nombre, tipo, costo);
    this.color = +color;
  }

  porcDescuento() {
    return this.color === 3 ? 10 : 0;
  }

  mostrar() {
    return `
        <tr>
            <td>${this.nombre}</td>
            <td>${this.tipo}</td>
            <td>${this.costo}</td>
            <td>${this.color}</td>
            <td>n/a</td>
            <td>${this.porcGanancia()}</td>
            <td>${this.porcDescuento()}</td>
            <td>${this.precio()}</td>
            </tr>
        `;
  }
}
