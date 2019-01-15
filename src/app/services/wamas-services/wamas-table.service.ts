import { Injectable } from '@angular/core';
import { WamasPaginatorService } from './wamas-paginator.service';
import { Drawable } from 'src/app/objects/drawable/Drawable';

@Injectable()
export class WamasTableService {

  displayedColumns: String[];
  elements: Drawable[];
  _wamasPaginatorService: WamasPaginatorService;

  constructor( ) { }

  getDisplayedColumns(): String[] {
    return this.displayedColumns;
  }

  setDisplayedColumns(displayedElements: String[]): void {
    this.displayedColumns = displayedElements;
  }

  getElements(): Drawable[] {
    return this.elements;
  }

  setElements(elements: Drawable[]): void {
    this.elements = elements;
  }

  setPaginatorService(service: WamasPaginatorService): void {
    this._wamasPaginatorService = service;
  }

  getPaginatorService(): WamasPaginatorService {
    return this._wamasPaginatorService;
  }
}
