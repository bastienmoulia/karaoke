import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio = new Audio();
  timeupdate: Observable<Event>;

  constructor() {
    this.timeupdate = fromEvent(this.audio, 'timeupdate');
  }

  set(src: string) {
    this.audio.src = src;
    this.audio.load();
  }

  play() {
    this.audio.play();
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
