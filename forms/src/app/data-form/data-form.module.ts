import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CheckboxModule } from 'primeng/checkbox';

import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';
import { VerificaEmailService } from './services/verifica-email.service';



@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    SharedModule,
    DropdownModule,
    MultiSelectModule,
    RadioButtonModule,
    TriStateCheckboxModule,
    CheckboxModule
  ],
  providers: [VerificaEmailService]
})
export class DataFormModule { }
