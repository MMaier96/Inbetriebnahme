import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wamasTableFiltering'
})
export class WamasTablePipe implements PipeTransform {

  transform(tableData: any[], page: number, size: number): any[] {
    if (page === undefined) {
      page = 0;
    }
    const startIndex = page * size ;
    const endIndex = startIndex + size;
    return tableData.slice(startIndex, endIndex);
  }

}
