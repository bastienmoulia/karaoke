import { Injectable } from '@angular/core';
import { Lyrics } from '../shared/lyrics';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyrics: Lyrics;

  constructor() {
    const lyricsLocal = localStorage.getItem('lyrics');
    if (lyricsLocal) {
      this.set(JSON.parse(lyricsLocal));
    }
  }

  set(lyrics: any) {
    // TODO: vérifier le contenu
    this.lyrics = lyrics;
  }

  save() {
    localStorage.setItem('lyrics', JSON.stringify(this.lyrics));
  }

  download() {
    // TODO: générer et télécharger le fichier JSON
    const blob = new Blob([JSON.stringify(this.lyrics)], {type: 'application/json'});
    const filename = 'lyrics.json';
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
  }
}
