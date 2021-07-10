import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {
  
  inscricao: Subscription = new Subscription();
  aluno: any = {}

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
    ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.aluno = this.alunosService.getAlunosById(params['id'])

      // if(this.aluno == null){
      //   this.router.navigate(['/naoEncontrado'])
      // }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

  editarContato(): void{
    this.router.navigate(['alunos', this.aluno.id, 'edit'])
  }

}
