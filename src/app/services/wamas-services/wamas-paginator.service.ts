import { Injectable } from '@angular/core';

@Injectable()
export class WamasPaginatorService {

  length: number;
  pageSize: number;
  pageSizes: number[];
  index: number;

  constructor() { }

  getLength(): number {
    return this.length;
  }

  getPageSize(): number {
    return this.pageSize;
  }

  getPageSizes(): number[] {
    return this.pageSizes;
  }

  setLength(length: number) {
    this.length = length;
  }

  setPageSize(size: number) {
    this.pageSize = size;
  }

  setPageSizes(sizes: number[]) {
    this.pageSizes = sizes;
    this.pageSize = sizes[0];
  }

  getIndex(): number {
    return this.index;
  }

  setIndex(index: number): void {
    this.index = index;
  }
}
