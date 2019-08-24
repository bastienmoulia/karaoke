import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoveLineComponent } from './move-line/move-line.component';



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
