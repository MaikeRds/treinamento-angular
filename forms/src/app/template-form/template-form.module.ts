import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FormDebugComponent } from '../form-debug/form-debug.component';



@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent
  ]
})
export class TemplateFormModule { }
