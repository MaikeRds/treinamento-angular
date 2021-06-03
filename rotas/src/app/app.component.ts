import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label:'Home',
            icon:'pi pi-fw pi-home',
            routerLink: '/'
        },
        {
            label:'Cursos',
            icon:'pi pi-fw pi-file',
            routerLink: 'cursos'
        },
        {
            label:'Login',
            icon:'pi pi-fw pi-sign-in',
            routerLink: 'login'
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];
  } 
}
