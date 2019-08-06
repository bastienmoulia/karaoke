import { Component, OnInit } from '@angular/core';
import { LyricsService } from 'src/app/core/lyrics.service';

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

}
