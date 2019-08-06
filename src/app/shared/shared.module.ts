import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { HeaderComponent } from './header/header.component';
import { ViewerComponent } from './viewer/viewer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    ViewerComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ViewerComponent,
    TimePipe
  ]
})
export class SharedModule { }
