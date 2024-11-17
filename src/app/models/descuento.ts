import { Prenda } from "./prenda";
import { TiendaDistribuidora } from "./tienda-distribuidora";

export interface Descuento {
    idDescuento: number;
    codigoDescuento: string;
    porcentajeDescuento: number;
    fechaInicio: string; 
    fechaFin: string; 
    idPrenda: Prenda;
    idTienda: TiendaDistribuidora;
  }