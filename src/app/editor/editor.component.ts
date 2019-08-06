import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../core/lyrics.service';

@Component({
  selector: 'kar-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(
    public lyricsService: LyricsService
  ) { }

  ngOnInit() {
  }

}
