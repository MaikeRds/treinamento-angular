import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from './cursos.service';


@NgModule({
  declarations: [
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CardModule,
    TableModule,
    ButtonModule
  ]
})
export class CursosModule { }
