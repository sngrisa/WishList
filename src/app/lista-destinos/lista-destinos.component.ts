import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViajeDestino } from './../models/viaje-destino.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<ViajeDestino>;

  constructor(public destinosApiClient: DestinosApiClient) { 
  this.onItemAdded = new EventEmitter();
  }
  
  ngOnInit(): void{
  }
  
  agregado(d: ViajeDestino){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: ViajeDestino){
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
    };
  }

