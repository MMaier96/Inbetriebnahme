import { Injectable } from '@angular/core';

@Injectable()
export class AppTitleService {

  appTitle: String;

  constructor() { }

  getAppTitle(): String {
    return this.appTitle;
  }

  setAppTitle(title: String): void {
    this.appTitle = title;
    console.log(this.appTitle);
  }

}
