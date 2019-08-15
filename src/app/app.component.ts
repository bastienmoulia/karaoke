import { Component, HostListener } from '@angular/core';
import { AudioService } from './core/audio.service';

@Component({
  selector: 'kar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private audioService: AudioService
  ) {}
  @HostListener('keydown', ['$event']) keydown(event: KeyboardEvent) {
    console.log('keydown', event);
    if (event.code === 'Space') {
      this.audioService.toggle();
    }
  }
}
