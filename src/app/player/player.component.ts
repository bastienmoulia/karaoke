import { Component, OnInit } from '@angular/core';
import { Lyrics } from '../shared/lyrics';
import bsCustomFileInput from 'bs-custom-file-input';
import { AudioService } from '../core/audio.service';
import { LyricsService } from '../core/lyrics.service';

@Component({
  selector: 'kar-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  started = false;
  musicFile: File;
  lyricsFile: File;

  constructor(
    private audioService: AudioService,
    private lyricsService: LyricsService
  ) { }

  ngOnInit() {
    bsCustomFileInput.init();
  }

  onLyricsFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.onload = (e) => {
        try {
          this.lyricsService.set(JSON.parse(reader.result as string));
        } catch (ex) {
          console.warn(ex);
        }
      };
      reader.readAsText(file);
    }
  }

  onMusicFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.onload = (e) => {
        this.audioService.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }
}
