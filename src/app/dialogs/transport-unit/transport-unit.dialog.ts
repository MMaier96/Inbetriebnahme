import { Component, ViewChild, OnInit } from '@angular/core';
import { TransportUnit } from '../../objects/transport-unit';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'transport-unit-dialog',
  styleUrls: ['transport-unit.dialog.css'],
  templateUrl: 'transport-unit.dialog.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransportUnitDialog implements OnInit {
  /* Load Elements from Template */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* Data for Template */
  dataSource: MatTableDataSource<TransportUnit>;
  columnsToDisplay = ['name', 'type', 'location', 'order', 'error'];
  expandedElement: TransportUnit | null;

  /* Inject the Service */
  constructor(private _http: HttpClient) { }

  /* Lifcycle-Hook onCreation */
  ngOnInit() {
    this.dataSource = new MatTableDataSource<TransportUnit>();
    this.loadData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* Load data from Service */
  loadData() {
    this._http.get<TransportUnit[]>('https://api.myjson.com/bins/1fmqus').subscribe(data => {
      this.dataSource.data = data;
    });
  }

  /* Filter Function */
  applyFilter(filterValue: string) {
    /* Set Filter String to DataSource */
    this.dataSource.filter = filterValue.trim().toLowerCase();

    /* Reset the Paginator Page */
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
