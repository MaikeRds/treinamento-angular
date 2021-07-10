import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    ListboxModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalheComponent
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
