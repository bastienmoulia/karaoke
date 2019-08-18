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
  lyricsFile: File;
  fontSize = 1;

  constructor(
    private audioService: AudioService,
    public lyricsService: LyricsService
  ) { }

  ngOnInit() {
    this.audioService.timeupdate$.subscribe(() => {
      this.elapsed = this.audioService.audio.currentTime;
      this.duration = this.audioService.audio.duration;
    });
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

  fullscreen() {
    const elem = document.getElementById('viewer-fullscreen');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  reset() {
    this.lyricsService.reset();
  }

  bigger() {
    this.fontSize ++;
  }

  smaller() {
    this.fontSize --;
  }
}
