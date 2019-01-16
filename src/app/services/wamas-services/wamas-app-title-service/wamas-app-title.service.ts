import { Injectable } from '@angular/core';

@Injectable()
export class WamasAppTitleService {

  appTitle: String;

  constructor() { }

  getAppTitle(): String {
    return this.appTitle;
  }

  setAppTitle(title: String): void {
    this.appTitle = title;
  }

}
