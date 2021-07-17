import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario: any = {
    nome: null,
    email: null,
    cep: null,
    numero: null,
    complemento: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form)
    console.log(this.usuario)
  }

  verificaValidTouched(campo: any){
   return !campo.valid && campo.touched
  }

}
