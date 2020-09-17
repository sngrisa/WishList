import { ViajeDestino } from './viaje-destino.model';

export class DestinosApiClient {
	destinos:ViajeDestino[];
	constructor() {
       this.destinos = [];
	}
	add(d:ViajeDestino){
	  this.destinos.push(d);
	}
	getAll(){
	  return this.destinos;
    }
}