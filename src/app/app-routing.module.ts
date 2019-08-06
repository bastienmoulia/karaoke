import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'editor', component: EditorComponent },
  { path: '',
    redirectTo: '/player',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
