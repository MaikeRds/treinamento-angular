import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    FileUploadModule,
    
  ]
})
export class UploadFileModule { }
