import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioInterface } from '../../interfaces/usuario.interface';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

 
  // * Objetos destinados a recibir los datos del form
  usuario: UsuarioInterface = { nombre: null, apellido: null, correo: null, pais: "",  sexo: "Hombre", acepta: null};

  paises: PaisInterface [] = [ {codigo: "ES", nombre: "España"}, { codigo: "CAT", nombre: "Catalunya"}]

  sexos: string[] = ["Hombre", "Mujer", "Indefinido"]

  constructor() { }

  ngOnInit() {
  }

  guardar(form: NgForm) {
    console.log('ngForm: ', form);
    console.log('Valor: ', form.value);
    console.log("Usuario", this.usuario);
  }

}
