import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario: any = {
    nome: 'Maike',
    email: 'maike@email.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form)
    console.log(this.usuario)
  }

}
