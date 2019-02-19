import { AppTitleService } from './../../services/app-title.service';
import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TransportOrder } from 'src/app/objects/transport-order';
import { TransportOrderService } from 'src/app/services/transport-order.service';


@Component({
  selector: 'transport-order-dialog',
  styleUrls: ['transport-order.dialog.scss'],
  templateUrl: 'transport-order.dialog.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransportOrderDialog implements OnInit, AfterContentInit {
  /* Load Elements from Template */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* Data for Template */
  dataSource: MatTableDataSource<TransportOrder>;
  columnsToDisplay = ['tuName', 'location', 'nextTarget', 'active', 'error'];
  expandedElement: TransportOrder | null;

  /* Inject the Service */
  constructor(
    private _tuService: TransportOrderService,
    private _appTitleService: AppTitleService,
    ) { }

  /* Lifcycle-Hook onCreation */
  ngOnInit() {
    this.dataSource = new MatTableDataSource<TransportOrder>();
    this.loadData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* Load data from Service */
  loadData() {
    this._tuService.getAllTransportOrders().subscribe(data => {
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

  /**
   * Bugfix: https://stackoverflow.com/questions/43375532/expressionchangedafterithasbeencheckederror-explained
   * setTimeout() ist needed to avoid error on changing parents data over service
   */
  ngAfterContentInit(): void {
    setTimeout(() => {
      this._appTitleService.setDetailsView(false);
    }, 0);
  }
}
