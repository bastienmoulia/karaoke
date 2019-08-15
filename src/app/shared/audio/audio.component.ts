import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/core/audio.service';

@Component({
  selector: 'kar-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  elapsed = 0;
  duration = 0;
  progress = 0;
  audioFile: string;

  constructor(
    public audioService: AudioService
  ) { }

  ngOnInit() {
    this.audioService.timeupdate$.subscribe(() => {
      this.elapsed = this.audioService.audio.currentTime;
      this.duration = this.audioService.audio.duration || 1;
      this.progress = this.elapsed * 100 / this.duration;
    });
  }

  playPause() {
    this.audioService.toggle();
  }

  progressChanged(progress: number) {
    const time = progress * this.audioService.audio.duration / 100;
    this.audioService.audio.currentTime = time;
  }

  onAudioFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.onload = (e) => {
        this.audioService.set(reader.result as string, file.name);
      };
      reader.readAsDataURL(file);
    }
  }

  resetFile() {
    this.audioFile = null;
    this.audioService.reset();
  }
}
