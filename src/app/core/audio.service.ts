import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio = new Audio();

  constructor() { }

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
