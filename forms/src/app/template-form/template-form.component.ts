import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: '',
      numero: '',
      complemento: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form)
    console.log(this.usuario)
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  consultaCEP(event: any) {
    let cep = event.target.value as string;

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
        if (cep != "") {
          //Expressão regular para validar o CEP.
          const validacep = /^[0-9]{8}$/;

           //Valida o formato do CEP.
           if(validacep.test(cep)) {
              this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
              .subscribe((data) => {
                console.log(data)
              })
           }

        }
  }

}
