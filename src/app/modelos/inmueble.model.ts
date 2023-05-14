export class InmuebleModel{
  id?: number;
  direccion?: string;
  valor?: number;
  venta?: boolean;
  alquiler?: boolean;
  IdAsesor?: number;
  IdTipoInmueble?: number;
  IdCiudad?: number;
  InmuebleXFoto?: [];
  InmuebleXVideo?: [];
  InmuebleXSolicitud?: [];
}
