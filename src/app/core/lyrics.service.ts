import { Injectable } from '@angular/core';
import { Lyrics } from '../shared/lyrics';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyrics: Lyrics;

  constructor() { }

  set(lyrics: any) {
    this.lyrics = lyrics;
  }
}
