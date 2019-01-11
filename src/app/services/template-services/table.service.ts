import { Injectable } from '@angular/core';
import { PaginatorTemplateService } from './paginator.service';

@Injectable()
export class TableTemplateService {

  displayedColumns: String[];
  elements: any[];
  paginatorService: PaginatorTemplateService;

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

  setPaginatorService(service: PaginatorTemplateService): void {
    this.paginatorService = service;
  }

  getPaginatorService(): PaginatorTemplateService {
    return this.paginatorService;
  }
}
