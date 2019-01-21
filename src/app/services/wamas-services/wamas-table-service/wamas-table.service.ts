import { Injectable } from '@angular/core';
import { WamasPaginatorService } from '../wamas-paginator-service/wamas-paginator.service';

@Injectable()
export class WamasTableService {

  displayedColumns: String[];
  elements: any[];
  _wamasPaginatorService: WamasPaginatorService;
  fn;

  constructor( ) { }

  getDisplayedColumns(): String[] {
    return this.displayedColumns;
  }

  setDisplayedColumns(displayedElements: String[]): void {
    this.displayedColumns = displayedElements;
  }

  getElements(): any[] {
    return this.elements;
  }

  setElements(elements: any): void {
    this.elements = elements;
  }

  setPaginatorService(service: WamasPaginatorService): void {
    this._wamasPaginatorService = service;
  }

  getPaginatorService(): WamasPaginatorService {
    return this._wamasPaginatorService;
  }

  setComponentFunction(fn) {
    this.fn = fn;
  }

  getComponentFunction() {
    return this.fn;
  }
}
