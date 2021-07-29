import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit(){
    console.log(this.formulario.get('nome')?.errors)
    this.submitted = true;
    this.formulario.markAllAsTouched()
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');
    }
  }

  onCancel(){
    this.submitted = false;
    this.formulario.reset();  
  }

  hasError(field: string){
    return this.formulario.get(field)?.errors as any ;
  }

}
