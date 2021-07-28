import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
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

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => { 
      this.cursos = dados;
      this.loading = false;
    });
    //this.cursos$ = this.service.list()

  }

  loadCursos(event: LazyLoadEvent) {
    console.log(event)
    this.loading = true;
    console.log('aaa')

  }

  ngAfterViewChecked() {
  
  }

}
