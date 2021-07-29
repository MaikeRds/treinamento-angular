import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  providers: [MessageService]
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    console.log(this.formulario.get('nome')?.errors)
    this.submitted = true;
    this.formulario.markAllAsTouched()
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      console.log('submit');
      this.cursosService.create(this.formulario.value)
        .subscribe(
          success => {
            console.log(success);
            this.messageService.add(
              {
                severity: 'success',
                summary: 'Curso criado',
                detail: 'O curso foi criado com sucesso!'
              });
            this.formulario.reset();
            this.location.back()
          },
          error => {
            console.error(error)
            this.messageService.add(
              {
                severity: 'error',
                summary: 'Create error',
                detail: 'Erro ao criar curso. Tente novamente mais tarde.'
              });
          },
          () => console.log('Request completo')
        )
    }
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
  }

  hasError(field: string) {
    return this.formulario.get(field)?.errors as any;
  }

}
