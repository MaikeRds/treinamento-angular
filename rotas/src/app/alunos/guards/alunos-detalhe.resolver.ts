import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      console.log('AlunosDetalheResolver:')
      let id = route.params['id'];

      return this.alunosService.getAlunosById(id);
  }
}
