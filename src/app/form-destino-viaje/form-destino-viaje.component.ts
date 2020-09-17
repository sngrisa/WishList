import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViajeDestino } from '../models/viaje-destino.model';



@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})

export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<ViajeDestino>;
  fg: FormGroup;

  constructor(private fb: FormBuilder) { 
    //inicializar
    this.onItemAdded = new EventEmitter();
    //vinculacion con tag html
    this.fg = this.fb.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required]
    });
    
    //observador de tipeo
    this.fg.valueChanges.subscribe((form: any) =>{
      console.log('cambio el formulario: ', form);
    })
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    const d = new ViajeDestino(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

}
