export interface Driver{
  id:number;
  apellidoNombre: string;
  documento: number;
  telefono: string | null;
  telefonoAuxiliar: string | null;
  mail: string | null;
  vehiculo: Vehiculo | null;
}

 export interface Vehiculo{
  id: number;
  patente_1: string;
  patente_2: string|undefined,
  codigo: string|undefined;
  cargaMaxima: number|undefined;
  volumenMaximo:number|undefined;
  posicionesTotales: number|undefined;
  posicionesAcoplado:number|undefined;
  chofer: Driver | null;
} 