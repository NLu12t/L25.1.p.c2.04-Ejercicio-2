import Cl_articulo from "./Cl_articulo.js";

export default class Cl_viveres extends Cl_articulo {
  constructor(nombre, tipo, costo, basico) {
    super(nombre, tipo, costo);
    this.basico = basico;
  }

  porcGanancia() {
    if (this.basico === "SI") return 50 / 100;
    else return super.porcGanancia();
  }

  mostrar() {
    return `
        <tr>
          <td>${this.nombre}</td>
          <td>${this.tipo}</td>
          <td>${this.costo}</td>
          <td>n/a</td>
          <td>${this.basico}</td>
          <td>${this.porcGanancia()}</td>
          <td>${this.porcDescuento()}</td>
          <td>${this.precio()}</td>
        </tr>
        `;
  }
}
