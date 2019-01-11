import { PaginatorTemplateService } from './../../../services/template-services/paginator.service';
import { TableTemplateService } from './../../../services/template-services/table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  change = this._paginatorService.getIndex();

  constructor(
    public _tableTemplateService: TableTemplateService,
    public _paginatorService: PaginatorTemplateService) { }



}
