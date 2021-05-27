import { Injectable, EventEmitter } from "@angular/core";


@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'PHP'];

  constructor(){
    console.log(CursosService.name)
  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso)
  }
}
