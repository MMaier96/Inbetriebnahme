import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFiltering'
})
export class TablePipe implements PipeTransform {

  transform(tableData: any[], page: number, size: number): any[] {
    if (page === undefined) {
      page = 0;
    }
    const startIndex = page * size ;
    const endIndex = startIndex + size;
    console.log(startIndex);
    console.log(endIndex);
    return tableData.slice(startIndex, endIndex);
  }

}
