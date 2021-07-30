import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule
  ],
  exports: []
})
export class SharedModule { }
