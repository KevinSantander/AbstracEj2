export abstract class Vehiculo {
  protected velocidadMaxima: number;
  protected asientos: number;
  protected traccion: string;

  public constructor() {
    this.velocidadMaxima = 190;
    this.asientos = 4;
    this.traccion = 'Delantera';
  }

  abstract setAcelerar(): void;

  abstract setCantidadAsientos(): void; 

  abstract setTipoTraccion(): void;

}

