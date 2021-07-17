import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

 @Input() mostrarErro: boolean = false;
 @Input() msgErro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
