import { Injectable } from '@angular/core';
import { Lyrics } from '../shared/lyrics';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyrics: Lyrics;

  constructor() { }

  set(lyrics: any) {
    // TODO: vérifier le contenu
    this.lyrics = lyrics;
  }

  download() {
    // TODO: générer et télécharger le fichier JSON
  }
}
