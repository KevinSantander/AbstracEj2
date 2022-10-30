import { Vehiculo } from "./vehiculos";

export class AutoDeportivo extends Vehiculo {
  
  public setAcelerar(): void {
    this.velocidadMaxima = + 310;
  }

  public setCantidadAsientos(): void {
    this.asientos = 2;
  }

  public setTipoTraccion(): void {
    this.traccion = 'tracera';
  }

}