import { PaginatorTemplateService } from './../../../services/template-services/paginator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  constructor(public _paginatorService: PaginatorTemplateService) { }

  onPaginateChange(event) {
    console.log(event);
    this._paginatorService.setIndex(event.pageIndex);
    this._paginatorService.setPageSize(event.pageSize);
  }

}
