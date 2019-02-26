import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class AppTitleService {

  @Output() isDetailsView = new EventEmitter<boolean>();

  constructor() { }

  setDetailsView(detailsView: boolean): void {
    this.isDetailsView.emit(detailsView);
  }
}
