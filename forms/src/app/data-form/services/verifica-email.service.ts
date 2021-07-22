import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, delay, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  emailsUrl = 'assets/dados/verificarEmail.json';

  constructor(private http: HttpClient) { }

  verificarEmail(email: string): Observable<any> {
    return this.http.get<any[]>(this.emailsUrl, { responseType: 'json' })
    .pipe(
      delay(3000),
      debounceTime(300),
      tap(console.log),
      map((dados: any): any[] => dados.emails),
      // tap(console.log),
      map((dados: {email: string}[]): any[] => dados.filter( v => v.email === email )),
      // tap(console.log),
      map((dados: any[]): any => dados.length > 0 ),
      // tap(console.log),
    );
  }
}
