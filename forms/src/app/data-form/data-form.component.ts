import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })

    //[Validators.required, Validators.minLength(3), Validators.maxLength(20)]
  }

  onSubmit(): void {
    console.log(this.formulario)
    this.http.post('https://httpbin.org/post', this.formulario.value).subscribe(
      (dados) => {
        console.log(dados);
        //reseta o form
        this.reset();
      }, (error: any) => alert('erro'));
  }

  reset(): void {
    this.formulario.reset();
  }

}
