export interface User {
    id: number;
    nombreUsuario: string;
    password: string;
    correo: string;
    direccion: string;
    fechaRegistro: string;
    enabled: boolean;
    genero: string;
    edad: number;
    dni: string;
    authorities: string;
    preferencia: string;
  }