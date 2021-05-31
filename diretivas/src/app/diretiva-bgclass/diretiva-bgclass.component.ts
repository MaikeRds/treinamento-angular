import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-bgclass',
  templateUrl: './diretiva-bgclass.component.html',
  styleUrls: ['./diretiva-bgclass.component.scss']
})
export class DiretivaBgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }

}
