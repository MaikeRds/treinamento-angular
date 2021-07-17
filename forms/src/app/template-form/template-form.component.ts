import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form);
    console.log(this.usuario);

    this.http.post('https://httpbin.org/post', this.usuario).subscribe(
      (dados) => {
        return dados
      })
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  consultaCEP(event: any, form: any) {
    let cep = event.target.value as string;

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetaDadosForm(form);
        this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
          .subscribe((dados) => {
            this.popularDadosForm(dados, form);
          })
      }

    }
  }

  popularDadosForm(dados: any, formulario: NgForm) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: '',
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })

    formulario.form.patchValue({
      endereco: {
        numero: '',
        complemento: '',
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        numero: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
