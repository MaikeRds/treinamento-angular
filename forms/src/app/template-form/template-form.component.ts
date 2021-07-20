import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CepService } from '../shared/services/cep.service';

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

  constructor(
    private http: HttpClient, 
    private cepService: CepService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form);
    console.log(this.usuario);

    this.http.post('https://httpbin.org/post', this.usuario).subscribe(
      (dados) => {
        console.log(dados);
        form.form.reset()
      })
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  consultaCEP(event: any, form: any) {
    let cep = event.target.value as string;
    this.resetaDadosForm(form);
    
    if(cep != null && cep !== '' ){
      this.cepService.consultaCEP(cep).subscribe((dados: any) => {
        this.popularDadosForm(dados, form);
      });
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
