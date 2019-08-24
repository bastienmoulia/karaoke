import { Component, OnInit } from '@angular/core';
import { LyricsService } from 'src/app/core/lyrics.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoveLineComponent } from '../move-line/move-line.component';

const lineTime = 2;

@Component({
  selector: 'kar-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    public lyricsService: LyricsService,
    private ngbModal: NgbModal
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

  keydown(event: KeyboardEvent) {
    event.stopPropagation();
  }

  deleteLine(index: number) {
    this.lyricsService.lyrics.lines.splice(index, 1);
    this.save();
  }

  insertLine(index: number) {
    let start = 0;
    if (this.lyricsService.lyrics.lines.length > 1) {
      start = this.lyricsService.lyrics.lines[index].stop;
    }
    const stop = start + lineTime;

    this.lyricsService.lyrics.lines.splice(index + 1, 0, {
      start,
      stop,
      text: ''
    });
    this.save();
  }

  moveLine(index: number) {
    this.ngbModal.open(MoveLineComponent);
    this.save();
  }
}
