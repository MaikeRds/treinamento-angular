import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, Message, MessageService } from 'primeng/api';
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
    private messageService: MessageService
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

  ngAfterViewChecked() {

  }

}
