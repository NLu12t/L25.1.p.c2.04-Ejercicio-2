export default class Cl_articulo {
  constructor(nombre, tipo, costo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.costo = costo;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set costo(costo) {
    this._costo = +costo;
  }
  get nombre() {
    return this._nombre;
  }
  get costo() {
    return this._costo;
  }
  get tipo() {
    return this._tipo;
  }
  set tipo(tipo) {
    this._tipo = +tipo;
  }

  porcGanancia() {
    return (this.costo * 20) / 100;
  }

  porcGanancia() {
    return 20;
  }

  porcDescuento() {
    return 0;
  }

  precio() {
    let descuento = (this.costo * this.porcDescuento()) / 100;
    let ganancia = (this.costo * this.porcGanancia()) / 100;
    return this.costo - descuento + ganancia;
  }
}