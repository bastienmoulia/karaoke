import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor.component';
import { FormComponent } from './form/form.component';
import { MoveLineComponent } from './move-line/move-line.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [EditorComponent, TimelineComponent, FormComponent, MoveLineComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [
    MoveLineComponent
  ]
})
export class EditorModule { }
