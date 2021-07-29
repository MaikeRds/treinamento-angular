import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

@NgModule({
  declarations: [
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    MessageModule
  ]
})
export class CursosModule { }
