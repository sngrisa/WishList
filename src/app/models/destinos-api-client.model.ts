import { BehaviorSubject, Subject } from 'rxjs';
import { ViajeDestino } from './viaje-destino.model';

export class DestinosApiClient {
	destinos: ViajeDestino[];
	current: Subject<ViajeDestino> = new BehaviorSubject<ViajeDestino>(null);
	constructor() {
       this.destinos = [];
	}
	add(d:ViajeDestino){
	  this.destinos.push(d);
	}
	getAll(): ViajeDestino []{
	  return this.destinos;
	}
	getbyId(id:String):ViajeDestino{
		return this.destinos.filter(function(d) {return d.id.toString() == id; })[0];
	}
	elegir(d: ViajeDestino){
		this.destinos.forEach(x => x.setSelected(false));
		d.setSelected(true);
		this.current.next(d);
	}
	subscribeOnChange(fn){
		this.current.subscribe(fn);
	}
}