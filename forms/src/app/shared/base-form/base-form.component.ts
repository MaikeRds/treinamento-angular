import { FormGroup } from '@angular/forms';

export abstract class BaseFormComponent {

  formulario: FormGroup = new FormGroup({});

  constructor() { }

  abstract submit(): void

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario invalido');
      this.formulario.markAllAsTouched()
    }
  }

  /**
  * Verificar se o campo está válido ao realizar um Touched
  * @param campo Buscar campo no fórmulario;
  * @returns Retorna verdadeiro ou falso
  */
  verificaValidTouched(campo: string): boolean {
    return !this.formulario.get(campo)?.valid && !!this.formulario.get(campo)?.touched;
  }

 /**
  * Exemplo Obsoleto
  * Novo método:  this.formulario.markAllAsTouched()
  */
  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle?.markAsTouched()
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle)
      }
    })
  }

  /**
  * Resetar totalmente o formulario
  */
  reset(): void {
    this.formulario.reset();
  }

}
