import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { isRegExp } from 'util';
import { ViajeDestino } from './../models/viaje-destino.model';

@Component({
  selector: 'app-viaje-destino',
  templateUrl: './viaje-destino.component.html',
  styleUrls: ['./viaje-destino.component.css']
})
export class ViajeDestinoComponent implements OnInit {
  @Input() destino: ViajeDestino;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() onClicked: EventEmitter<ViajeDestino>;
  
  constructor(){
    this.onClicked = new EventEmitter();
  }

  ngOnInit(){

  }

ir(){
  this.onClicked.emit(this.destino);
   return false;
}

voteUp(){

}

voteDown(){

}

}

