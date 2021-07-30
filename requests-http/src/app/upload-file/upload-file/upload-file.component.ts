import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  Subscription } from 'rxjs';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  @ViewChild('fileUpload') fileUpload: any;
  files: Set<File> | undefined;
  upload$: Subscription = new Subscription()

  constructor(private uploadFileService: UploadFileService) { }

  
  ngOnInit(): void {
    console.log(this.fileUpload);
  }
  
  onUpload(event: any) {
    this.fileUpload.progress = 5;
    console.log(event)
    console.log(this.fileUpload);

    const selectedFiles = <FileList>event.files;
    console.log(selectedFiles)
    this.files = new Set();
    
    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i]);
    }
    
    if(this.files && this.files.size > 0 ){
      this.upload$ =  this.uploadFileService.upload(this.files, 'api/upload')      
      .subscribe((res) => {
        console.log('upload concluído!');   
        this.fileUpload.progress += 95;    
      },
      err => console.error(err)
      );
    }
  }

  onProgress(event: any){
    console.log(event);
  }
  
  ngOnDestroy(): void {
    this.upload$.unsubscribe()
  }

}
