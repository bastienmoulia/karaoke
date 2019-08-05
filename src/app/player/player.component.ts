import { Component, OnInit } from '@angular/core';
import { Lyrics } from '../shared/lyrics';

@Component({
  selector: 'kar-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  started = false;
  musicFile: File;
  lyricsFile: File;
  lyrics: Lyrics;
  audio = new Audio();
  position: number;
  elapsed: number;
  duration: number;
  elapsedText: string;
  durationText: string;

  constructor() { }

  ngOnInit() {
    this.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.lyrics = {
      lines: [
        {
          start: 5.0,
          stop: 13.0,
          words: [
            {
              text: 'Hello',
              start: 8.0,
              stop: 10
            }, {
              text: 'World',
              start: 10.0,
              stop: 12
            }
          ]
        }
      ]
    }
    ;
  }

  load() {
    this.audio.src = 'assets/demo/audio.mp3';
    this.audio.load();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(`let's rock !`);
    this.started = true;
    this.load();
    this.audio.play();
  }

  playPause() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  handleTimeUpdate() {
    this.elapsed = this.audio.currentTime;
    this.duration = this.audio.duration;
    this.position = this.elapsed / this.duration;
    this.elapsedText = this.formatTime(this.elapsed);
    this.durationText = this.formatTime(this.duration);
  }

  private formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }

}
