import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";


@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'PHP'];

  constructor(private logService: LogService){
    this.logService.consoleLog(CursosService.name)
  }

  getCursos(){
    this.logService.consoleLog('Obtendo uma lista de cursos.')
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}.`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso)
  }
}
