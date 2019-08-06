import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../core/audio.service';
import { LyricsService } from '../../core/lyrics.service';

@Component({
  selector: 'kar-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  elapsed: number;
  duration: number;

  constructor(
    private audioService: AudioService,
    public lyricsService: LyricsService
  ) { }

  ngOnInit() {
    this.audioService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  handleTimeUpdate() {
    this.elapsed = this.audioService.audio.currentTime;
    this.duration = this.audioService.audio.duration;
  }

}
