import { TableTemplateService } from './../../../services/template-services/table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(public _tableTemplateService: TableTemplateService) { }
}
