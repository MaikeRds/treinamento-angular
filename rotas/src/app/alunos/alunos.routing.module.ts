import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

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
    { path: ':id', component: AlunosDetalheComponent },
    { 
      path: ':id/edit', 
      component: AlunosFormComponent, 
      canDeactivate: [AlunosDeactivateGuard] 
    }
  ] }
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
