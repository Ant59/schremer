import { Injectable } from '@angular/core';

@Injectable()
export class SchemeStringsService {
  private strings: string[] = [
    "made evil plans to",
    "hatched a scheme to",
    "developed a plot to",
    "devised a cunning ploy to",
  ]

  constructor() { }

  public getSchemeString() {
    return this.strings[Math.floor(Math.random()*this.strings.length)];
  }

}
