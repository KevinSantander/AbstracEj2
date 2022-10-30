import { Vehiculo } from "./vehiculos";

export class Camioneta extends Vehiculo {
  
 public setAcelerar(): void {
    this.velocidadMaxima = +100;
  }

  public setCantidadAsientos(): void {
    this.asientos = +3;
  }

  public setTipoTraccion(): void {
    this.traccion = ' 4 x 4 ';
  }

}