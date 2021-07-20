import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Estado } from '../shared/models/estado';
import { CepService } from '../shared/services/cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  estados: Estado[] = [];
  cargos: any[] = [];
  tecnologias: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private primengConfig: PrimeNGConfig,
    private dropdownService: DropdownService,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),

      cargo: [null],
      tecnologia: [null]
    })

    //[Validators.required, Validators.minLength(3), Validators.maxLength(20)]

    this.dropdownService.getEstadosBr().subscribe((dados) => {
      this.estados = dados
    });

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
  }

  /**
   * Verificar se o campo está válido ao realizar um Touched
   * @param campo Buscar campo no fórmulario;
   * @returns Retorna verdadeiro ou falso
   */
  verificaValidTouched(campo: string): boolean {
    return !this.formulario.get(campo)?.valid && !!this.formulario.get(campo)?.touched;
  }

  /**
   * Verificar se o email é válido.
   * @returns retorna verdadeiro ou falso.
   */
  verificarEmail(): boolean {
    return !!this.formulario.get('email')?.hasError('email')
  }

  /**
   * Submitar dados do formulário ao servidor.
   */
  onSubmit(): void {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', this.formulario.value).subscribe(
        (dados) => {
          console.log(dados);
          //reseta o form
          this.reset();
        }, (error: any) => alert('erro'));
    } else {
      console.log('formulario invalido');
      this.formulario.markAllAsTouched()
      // this.verificaValidacoesForm(this.formulario)
    }
  }

  // verificaValidacoesForm(formGroup: FormGroup){
  //   Object.keys(formGroup.controls).forEach((campo) => {     
  //     const controle = formGroup.get(campo);
  //     controle?.markAsTouched()
  //     if(controle instanceof FormGroup){
  //       this.verificaValidacoesForm(controle)
  //     }
  //   })
  // }

  /**
   * Resetar totalmente o formulario
   */
  reset(): void {
    this.formulario.reset();
  }

  /**
   * Fazer busca do CEP e popular dados
   */
  consultaCEP() {
    let cep = this.formulario.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe((dados: any) => {
        this.popularDadosForm(dados);
      });
    }
  }

  /**
   * Popular dados no formulário
   * @param dados 
   */
  popularDadosForm(dados: any) {
    //Popular dados
    this.formulario.patchValue({
      endereco: {
        numero: '',
        complemento: '',
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    //this.formulario.get('nome')?.setValue('Maike');
  }

  /**
   * Resetar dados do forulário
   */
  resetaDadosForm() {
    this.formulario.patchValue({
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

  setCargo() {
    const cargo = { nome: null, nivel: 'Pleno', desc: null };

    this.formulario.get('cargo')?.setValue(cargo);
  }

  setTecnologias() {
    const tecnologias = [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
    ];

    this.formulario.get('tecnologia')?.setValue(tecnologias);
  }

}
