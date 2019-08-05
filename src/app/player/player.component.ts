import { Component, OnInit } from '@angular/core';
import { Lyrics } from '../shared/lyrics';
import bsCustomFileInput from 'bs-custom-file-input';

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
    bsCustomFileInput.init();
    this.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  load() {
    this.audio.src = 'assets/demo/audio.mp3';
    this.audio.load();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(`let's rock !`, this.lyricsFile);
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

  onLyricsFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);

      reader.onload = (e) => {
        try {
          this.lyrics = JSON.parse(reader.result as string);
        } catch (ex) {
          alert('ex when trying to parse json = ' + ex);
        }
      };
    }
  }
}
