import { Descuento } from "./descuento";
import { PrendaTienda } from "./prenda-tienda";

export interface TiendaDistribuidora {
    idTienda: number;
    nombreTienda: string;
    descuentos?: Descuento[];
    prendaTiendas?: PrendaTienda[];
  }