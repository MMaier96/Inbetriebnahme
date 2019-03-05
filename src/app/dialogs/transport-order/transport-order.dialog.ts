import { TransportOrder } from './../../objects/transport-order';
import { AppTitleService } from './../../services/app-title.service';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, ViewChild, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { TransportUnit } from '../../objects/transport-unit';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { TransportOrderService } from 'src/app/services/transport-order.service';

/* Metadata of the Component */
@Component({
  selector: 'transport-order-dialog',
  styleUrls: ['transport-order.dialog.scss'],
  templateUrl: 'transport-order.dialog.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransportOrderDialog implements OnInit, AfterContentInit {

  /* HTML-Template Elements */
    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

  /* Class variables for HTML-Template and TS-Logic */
    columnsToDisplay = ['tuName', 'location', 'nextTarget', 'active', 'error'];
    dataSource: MatTableDataSource<TransportOrder>;
    expandedElement: TransportOrder | null;
    filter: string;
    maxItems: number;
    pageSize = environment.defaultPageSize;
    panelOpenState = false;
    queryMode = 'indeterminate';
    searchValue: string;
    pageIndex = 0;
    paginatorOldPageIndex = 0;

  /* Inject the Service */
    constructor(
      private _toService: TransportOrderService,
      private _appTitleService: AppTitleService,
      private route: ActivatedRoute,
      private location: Location
    ) { }

  /**
   * Lifecycle-hook for the creation of the app.
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filter = params.get('filter');
    });
    this.dataSource = new MatTableDataSource<TransportOrder>();
    this.loadData();
    this.dataSource.paginator = this.paginator;
    this.paginator.getNumberOfPages = () => this.maxItems / this.paginator.pageSize;
    this.paginator.hasNextPage = () => (this.pageIndex * this.pageSize ) + this.pageSize <= this.maxItems;
    this.paginator.hasPreviousPage = () => this.pageIndex > 0;
    this.dataSource.sortingDataAccessor = (item, property) => this.sortingDataAccessor(item, property);
    this.dataSource.sort = this.sort;
  }

  /**
   * Loads the data from the service and bind it to the class when finished.
   * Also change progressbar to 'determinate' in order to disappear.
   *
   * @Param filter (optional): Filter
   *
   */
  loadData(): void {
    this._toService.getObjectsForPage(this.filter, this.pageIndex).subscribe(data => {
      this.dataSource.data = data;
      this.queryMode = 'determinate';
    });
    this._toService.getObjectsCount().subscribe(data => this.maxItems = data);
  }

  /**
   * Sets the clientside filter and resets the paginator
   *
   * @Param filter: Filter
   */
  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Sets the serverside filter as url parameter, send a new data request with filter and resets the paginator
   */
  search(value): void {
    this.filter = value;
    this.location.replaceState('transport-units/' + this.filter);
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.paginatorOldPageIndex = 0;
    this.loadData();
  }

  /**
   * Reffer the property of the item.
   * This is needed because the table can't handle nested objects
   *
   * @Param item: The item from the table
   * @Param property: Called property on the item
   */
  sortingDataAccessor(item, property): any {
    switch (property) {
      /* nested properties of item */
      case 'type': return item.type.name;
      case 'location': return item.locationLabel;
      case 'order': return item.hasActiveTo;
      case 'error': return item.errorCodes;

      /* direct properties of item */
      default: return item[property];
    }
  }

  /**
   * Resets the filter value
   */
  resetFilter(): void {
    this.filter = '';
    this.location.replaceState('transport-orders');
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

  pageChange(event): void {
    if (event.pageIndex === 1) { // next Page
      this.paginatorOldPageIndex++;
    } else { // prev Page
      this.paginatorOldPageIndex--;
    }
    this.pageIndex = this.paginatorOldPageIndex;
    this.loadData();
    this.paginator.pageIndex = 0;
  }
}
