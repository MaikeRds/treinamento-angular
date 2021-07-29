import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API =`${environment.api}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API).pipe(
      delay(2000),
      tap(console.log),
      take(1)
    )
  }

  loadById(id: number){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(curso: Curso){
    return this.http.post(this.API, curso).pipe(
      take(1)
    );
  }

  private update(curso: Curso){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(
      take(1)
    );
  }

  save(curso: Curso){
    if(curso.id){
      return this.update(curso);      
    }        
    return this.create(curso);
  }

  delete(id: number){
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1)
    );
  }
  

}
