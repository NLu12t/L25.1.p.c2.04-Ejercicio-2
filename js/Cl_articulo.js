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
    //condicional
    // if(this.basico === "SI")
    //   return this.costo * 5 /100
    // else
    return 20 / 100;
  }

  porcDescuento() {
    //condicional
    if (this.color === 3) {
      return (this.costo * 10) / 100;
    }
    return 0;
  }

  precio() {
    return this.costo - this.porcDescuento() + this.porcGanancia();
  }
}
