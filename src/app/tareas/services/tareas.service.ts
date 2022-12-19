import {Injectable} from '@angular/core';
import {Tarea} from '../interfaces/tarea'; 

@Injectable()
export class TareasService{
	tareas: Array<Tarea>=[
	{	
		tarea:'Barrer',
		completada:false,
	},
	{	
		tarea:'Trapeas',
		completada:true,
	},
	{	
		tarea:'Cocinar',
		completada:false,
	},
	{	
		tarea:'Leer',
		completada:false,
	},
	];

	deleteTarea(nombreTarea:string){
		this.tareas=this.tareas.filter(tarea=>tarea.tarea!==nombreTarea)
	}
}