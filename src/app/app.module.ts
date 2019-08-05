import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerModule } from './player/player.module';
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PlayerModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
