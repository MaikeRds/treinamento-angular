import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  items: MenuItem[] = [];
  title = 'forms';

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      { 
        label: 'Angular Forms',
        icon:'pi pi-fw pi-home',
        routerLink: '/',
        routerLinkActiveOptions: {exact: true}
      },
      { 
        label: 'Form - Template Driven',  
        icon:'pi pi-fw pi-file',
        routerLink: '/templateForm',
        routerLinkActiveOptions: {exact: true}
      },
      { 
        label: 'Form - Data Driven',  
        icon:'pi pi-fw pi-file',
        routerLink: '/dataForm',
        routerLinkActiveOptions: {exact: true}
      }
    ];
}
}
