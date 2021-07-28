import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) { }

  items: MenuItem[] = [];
  title = 'requests-http';

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
        label: 'Angular Http',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Cursos',
        icon: 'pi pi-fw pi-file',
        routerLink: '/cursos',
        routerLinkActiveOptions: { exact: true }
      },
      // {
      //   label: 'Menu 02',
      //   icon: 'pi pi-fw pi-file',
      //   routerLink: '/menu02',
      //   routerLinkActiveOptions: { exact: true }
      // }
    ];
  }
}
