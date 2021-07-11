import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from '../guards/alunos.guard';
import { FormDeactivateGuard } from '../guards/form-deactivate.guard';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheResolver } from './guards/alunos-detalhe.resolver';

// export const alunosRoutes: Routes = [
//   { path: 'alunos', component: AlunosComponent },
//   { path: 'alunos/novo', component: AlunosFormComponent },
//   { path: 'alunos/:id', component: AlunosDetalheComponent },
//   { path: 'alunos/:id/edit', component: AlunosFormComponent }
// ]

export const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, 
  canActivateChild: [AlunosGuard],
  children: [
    { path: 'novo', component: AlunosFormComponent },
    { 
      path: ':id',
      component: AlunosDetalheComponent,
      resolve: { aluno: AlunosDetalheResolver} 
    },
    { 
      path: ':id/edit', 
      component: AlunosFormComponent, 
      canDeactivate: [FormDeactivateGuard] 
    }
  ] }
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
