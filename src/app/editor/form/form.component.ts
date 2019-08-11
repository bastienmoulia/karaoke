import { Component, OnInit } from '@angular/core';
import { LyricsService } from 'src/app/core/lyrics.service';

const lineTime = 2;

@Component({
  selector: 'kar-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    public lyricsService: LyricsService
  ) { }

  ngOnInit() {
  }

  newLyrics() {
    this.lyricsService.set({lines: []});
  }

  newLine() {
    let start = 0;
    if (this.lyricsService.lyrics.lines.length > 0) {
      start = this.lyricsService.lyrics.lines.slice(-1)[0].stop;
    }
    const stop = start + lineTime;

    this.lyricsService.lyrics.lines.push({
      start,
      stop,
      text: ''
    });
    this.save();
  }

  save() {
    this.lyricsService.save();
  }

  download() {
    this.lyricsService.download();
  }
}
