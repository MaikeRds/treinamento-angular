import { FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class FormValidation {

  // https://github.com/yuyang041060120/ng2-validation#readme

  static cepValidator(control: FormControl): ValidationErrors | null {
    const cep = control.value;

    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true }
    }

    return null;
  }

  static equalsTo(otherField: string): ValidationErrors | null {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    }

    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any): string {
    const config: {
      [key: string]: string
    } = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue['requiredLength']} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue['requiredLength']} caracteres.`,
      'cepInvalido': 'CEP inválido.'
    };

    return config[validatorName];
  }

}
