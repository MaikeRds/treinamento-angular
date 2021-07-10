import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

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
  
        if(this.aluno == null){
          this.aluno = {}
        }
      });
    }
  
    ngOnDestroy(): void {
      this.inscricao.unsubscribe()
    }
}
