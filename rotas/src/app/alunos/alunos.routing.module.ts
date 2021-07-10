import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'alunos', component: AlunosComponent, children: [
    { path: 'novo', component: AlunosFormComponent },
    { path: ':id', component: AlunosDetalheComponent },
    { path: ':id/edit', component: AlunosFormComponent }
  ] }
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
