import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class PlayerModule { }
