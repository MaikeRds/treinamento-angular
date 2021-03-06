import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cidade } from '../models/cidade';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  estadoUrl = 'assets/dados/estadosbr.json';
  cidadeUrl = 'assets/dados/cidadesbr.json';

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.estadoUrl, { responseType: 'json' });
  }

  getCidadesBr(estadoId: number): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.cidadeUrl, { responseType: 'json' }).pipe(
      map((cidades: Cidade[]) => cidades.filter(c => Number(c.estado) === estadoId ) )
    );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ]
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },
    ]
  }

  getNewsletters() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ]
  }
}
