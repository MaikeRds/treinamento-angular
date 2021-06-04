import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
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
            routerLinkActiveOptions: {exact: true}
        },
        {
            label:'Cursos com ID',
            icon:'pi pi-fw pi-file',
            routerLink: 'curso/5',
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
