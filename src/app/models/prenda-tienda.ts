import { Prenda } from "./prenda";
import { TiendaDistribuidora } from "./tienda-distribuidora";

export interface PrendaTienda {
    idPrendaTienda: number;
    fechaIngreso: string; 
    stockDisponible: number;
    disponible: boolean;
    idTienda: TiendaDistribuidora;
    prendaIdPrenda: Prenda;
  }