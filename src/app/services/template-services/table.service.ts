import { Injectable } from '@angular/core';

@Injectable()
export class TableTemplateService {

  displayedColumns: String[];
  elements: any[];

  constructor( ) { }

  getDisplayedColumns(): String[] {
    return this.displayedColumns;
  }

  setDisplayedColumns(displayedElements): void {
    this.displayedColumns = displayedElements;
  }

  getElements(): any[] {
    return this.elements;
  }

  setElements(elements): void {
    this.elements = elements;
  }
}
