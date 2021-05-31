import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://maike.com.br';
  cursoAngular: boolean = true;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  onMudouValor(evento){
    console.log(evento)
  }

  constructor() { }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  ngOnInit(): void {
  }

}
