import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
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

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap((id: any) => this.cursosService.loadById(id))
    // )
    // .subscribe((curso: Curso) => this.updateForm(curso));

    // concatMap => ordem da requisição importa
    // mergeMap => ordem nao importa
    // exhaustMap => casos de login


    const curso: Curso = this.route.snapshot.data['curso'];

    this.formulario = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  // updateForm(curso: Curso){
  //   this.formulario.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   })
  // }

  onSubmit() {
    console.log(this.formulario.get('nome')?.errors)
    this.submitted = true;
    this.formulario.markAllAsTouched()
    console.log(this.formulario.value);
    if (this.formulario.valid) {    

      let msgSuccess = {
        summary: 'Curso Criado',
        detail: 'O curso foi criado com sucesso!',
      };

      let msgError = {
        summary: 'Error ao criar curso. ',
        detail: 'Tente novamente mais tarde. ',
      };

      if(this.formulario.value.id){
        msgSuccess.summary =  'Curso Atualizado.';
        msgSuccess.detail =  'O Curso foi atualizado com sucesso!';
        msgError.summary = 'Error ao atualizar Curso.';
        msgError.detail = 'Tente novamente mais tarde. ';
      }

      this.cursosService.save(this.formulario.value)
        .subscribe(
          success => this.handleSuccess(success, msgSuccess),
          error => this.handleError(error, msgError),
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

  handleSuccess(success: any, alert: Message): void {
    console.log(success);
    this.messageService.add(
      {
        severity: 'success',
        summary: alert.summary,
        detail: alert.detail,
      });

    // setTimeout(() => this.messageService.clear(), 4000)
    this.formulario.reset();
    this.location.back()
  }

  handleError(error: any, alert: Message): void {
    console.log(error)
    this.messageService.add(
      {
        severity: 'error',
        summary: alert.summary,
        detail: alert.detail,
      });
  }

}
