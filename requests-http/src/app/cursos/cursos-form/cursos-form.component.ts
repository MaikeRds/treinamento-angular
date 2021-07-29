import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { map, switchMap } from 'rxjs/operators';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: any) => {
    //   const id = params['id'];
    //   const curso$ = this.cursosService.loadById(id);
    //   curso$.subscribe((curso): void =>  {
    //     this.updateForm(curso);
    //   });
    // });

    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap((id: any) => this.cursosService.loadById(id))
    )
    .subscribe((curso: Curso) => this.updateForm(curso));

    // concatMap => ordem da requisição importa
    // mergeMap => ordem nao importa
    // exhaustMap => casos de login

    this.formulario = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  updateForm(curso: Curso){
    this.formulario.patchValue({
      id: curso.id,
      nome: curso.nome
    })
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
                detail: 'Erro ao criar curso. Tente novamente mais tarde.',
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
