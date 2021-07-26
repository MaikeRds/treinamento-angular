import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidation } from '../form-validation';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  // @Input() mostrarErro: boolean = false;
  // @Input() msgErro: string = '';

  @Input() control: FormControl | AbstractControl | null = new FormControl()
  @Input() label: string = '';

  errorMessageNovo: string | null = '';

  constructor() {

  }

  ngOnInit(): void {
    // console.log(`${ErrorMsgComponent.name} - ngOnInit`)
  }

  ngOnChanges() {
    // console.log(`${ErrorMsgComponent.name} - ngOnChanges`)
  }

  ngOnDestroy() {
    // console.log(`${ErrorMsgComponent.name} - ngOnDestroy`)
  }

  ngAfterContentInit() {
   // console.log(`${ErrorMsgComponent.name} - ngAfterContentInit`)
  }

  ngAfterContentChecked() {
   // console.log(`${ErrorMsgComponent.name} - ngAfterContentChecked`)
  }

  ngAfterViewInit() {
   // console.log(`${ErrorMsgComponent.name} - ngAfterContentInit`)
  }

  ngAfterViewChecked() {
    // console.log(`${ErrorMsgComponent.name} - ngAfterContentChecked`)
  }

  /**
   * Criado para executar uma vez quando o componente tem mudanças.
   */
  ngDoCheck() {
    // console.log(`${ErrorMsgComponent.name} - ngDoCheck`)
    this.errorMessageNovo = this.checkErroMessage();
  }

  checkErroMessage(): string | null {
    // console.log(`${ErrorMsgComponent.name} - checkErroMessage`)
    for (const propertyName in this.control?.errors) {     

      //console.log(this.control?.getError(propertyName ));
      console.log(this.control?.dirty );
      console.log(this.control?.touched );
      if (
        this.control?.getError(propertyName) &&
        (this.control.dirty || this.control.touched)
      ) {

        console.log(propertyName)
        return FormValidation.getErrorMsg(this.label, propertyName, this.control.getError(propertyName))
      }
    }
    return null;
  }


  /**
   * Método ensinado no treinamento, porém é executado 2x devido ao 
   * ngAfterContentChecked
   * ngDoCheck
   */
  get errorMessage() {
    console.log(this.label)

    for (const propertyName in this.control?.errors) {
      if (
        this.control?.getError(propertyName) &&
        this.control.dirty
      ) {
        return FormValidation.getErrorMsg(this.label, propertyName, this.control.getError(propertyName))
      }
    }

    return null;
  }


}
