import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
    this.fileUpload.progress = 0;

    const selectedFiles = <FileList>event.files;
    console.log(selectedFiles)
    this.files = new Set();
    
    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i]);
    }
    
    if(this.files && this.files.size > 0 ){
      this.upload$ =  this.uploadFileService.upload(this.files, 'api/upload')
      .subscribe((event: HttpEvent<any> ) => {
        let progress = 0 ;
        switch(event.type){
          case HttpEventType.Response:
            console.log('Upload Concluído'); 
            progress = 100;
            //this.fileUpload.onProgress.emit({ origialEvent: event, progress: progress });
            // this.fileUpload.onUpload.emit({ files: this.files, origialEvent: event });
            // this.fileUpload.onClear.emit({ files: this.files, origialEvent: event });            
            break;
          case HttpEventType.UploadProgress:
            progress += Math.round((event.loaded * 100) / (event.total  ? event.total :  1 ));
            console.log('Upload: '+  Math.round((event.loaded * 100) / (event.total  ? event.total :  1 )));
           this.fileUpload.onProgress.emit({ origialEvent: event, progress: progress });
            break;         
        }   
      },
      err => console.error(err)
      );
    }
  }

  onProgress(event: any){
    console.log('onProgress: ' + event.progress);
    this.fileUpload.progress = event.progress;
  }
  
  ngOnDestroy(): void {
    this.upload$.unsubscribe()
  }

}
