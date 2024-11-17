import { CategoriaPrenda } from "./categoria-prenda";
import { Marca } from "./marca";

export interface Prenda {
    id: number;
    nombrePrenda: string;
    tipoPrenda: string;
    colorPrenda: string;
    talla: string;
    precioOriginal: number;
    precioFinal: number;
    idMarca: Marca;
    idCategoria: CategoriaPrenda;
  }