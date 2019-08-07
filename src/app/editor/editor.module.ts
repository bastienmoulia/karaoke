import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [EditorComponent, TimelineComponent, FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule
  ]
})
export class EditorModule { }
