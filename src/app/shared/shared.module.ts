import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { HeaderComponent } from './header/header.component';
import { ViewerComponent } from './viewer/viewer.component';
import { RouterModule } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    ViewerComponent,
    TimePipe,
    AudioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    ViewerComponent,
    AudioComponent,
    TimePipe
  ]
})
export class SharedModule { }
