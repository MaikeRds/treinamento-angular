import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstado } from '../intefaces/iestado';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  estadoUrl = 'assets/dados/estadosbr.json';

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<IEstado[]> {
   return this.http.get<IEstado[]>(this.estadoUrl, { responseType: 'json'});
  }
}
