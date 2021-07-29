import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent, Message, MessageService } from 'primeng/api';
import { EMPTY, Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[] = []
  cursos$ = new Observable<any>()
  loading: boolean = true;

  messages: any

  constructor(
    private service: CursosService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.loading = true;

    this.service.list()
      .subscribe(dados => {
        this.cursos = dados;
        this.loading = false;
      },
        error => {
          console.error(error);
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Loading error',
            detail: 'Erro ao carregar cursos. Tente novamente mais tarde.'
          })
          return EMPTY;
        }
      );
  }

  loadCursos(event: LazyLoadEvent) {
    console.log(event)
    this.loading = true;
  }

  onClick(id: any) {
    console.log(id)
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  confirm(event: Event, curso: Curso) {
    this.confirmationService.confirm({
      target: event?.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (curso && curso.id) {
          this.service.delete(curso.id).subscribe(
            (dados) => {
            this.onRefresh();
            this.messageService.add({
              severity: 'success',
              summary: 'Curso deletado.',
              detail: 'Curso deletado com sucesso.'
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Delete error',
              detail: 'Erro ao deletar curso. Tente novamente mais tarde.'
            })
          }
          )
        }
      },
      reject: () => {
        //reject action
      }
    });
  }

}
