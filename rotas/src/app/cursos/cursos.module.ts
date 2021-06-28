import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    ListboxModule
  ],
  exports: [],
  declarations: [CursosComponent, CursoDetalheComponent, CursoNaoEncontradoComponent],
  providers: [CursosService],
})
export class CursosModule { }
