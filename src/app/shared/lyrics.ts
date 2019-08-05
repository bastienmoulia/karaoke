export interface Lyrics {
  lines: {
    start: number,
    stop: number,
    words: {
      start: number,
      stop: number,
      text: string
    }[]
  }[];
}
