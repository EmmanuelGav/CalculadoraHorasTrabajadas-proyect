import { Servicio } from '../servicio/servicio.model';
import { Tecnico } from '../tecnico/tecnico.model';

export class ServicioTecnico {
    id:number;
    fechaInicial: string;	
	fechaFinal: string;	
	estado: number;
	idEstado: number;
	direccion: String;	
	servicio: Servicio;    
	servicioId: number;    
    tecnico: Tecnico;
    tecnicoId: number;
    
}