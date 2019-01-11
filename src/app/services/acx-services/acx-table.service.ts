import { Injectable } from '@angular/core';
import { ACXPaginatorService } from './acx-paginator.service';

@Injectable()
export class ACXTableService {

  displayedColumns: String[];
  elements: any[];
  _acxPaginatorTemplateService: ACXPaginatorService;

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

  setPaginatorService(service: ACXPaginatorService): void {
    this._acxPaginatorTemplateService = service;
  }

  getPaginatorService(): ACXPaginatorService {
    return this._acxPaginatorTemplateService;
  }
}
