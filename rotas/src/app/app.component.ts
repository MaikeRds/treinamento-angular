import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService ){

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    this.items = [
        {
            label:'Home',
            icon:'pi pi-fw pi-home',
            routerLink: '/',
            routerLinkActiveOptions: {exact: true}
        },
        {
            label:'Cursos',
            icon:'pi pi-fw pi-file',
            routerLink: 'cursos',
            routerLinkActiveOptions: {exact: true},
            queryParams: {  pagina: 0 }
        },
        // {
        //     label:'Cursos com ID',
        //     icon:'pi pi-fw pi-file',
        //     routerLink: 'curso/5',
        //     routerLinkActiveOptions: {exact: true}
        // },
        {
          label:'Alunos',
          icon:'pi pi-fw pi-file',
          routerLink: 'alunos',
          routerLinkActiveOptions: {exact: true}
      },
        {
            label:'Login',
            icon:'pi pi-fw pi-sign-in',
            routerLink: 'login',
            routerLinkActiveOptions: {exact: true}
        }        
    ];
  } 
}
