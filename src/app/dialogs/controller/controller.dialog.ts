import { ControllerService } from './../../services/controller.service';
import { Controller } from './../../objects/controller';
import { AppTitleService } from './../../services/app-title.service';
import { Component, ViewChild, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

/* Metadata of the Component */
@Component({
  selector: 'controller-dialog',
  styleUrls: ['controller.dialog.scss'],
  templateUrl: 'controller.dialog.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ControllerDialog implements OnInit, AfterContentInit {

  /* HTML-Template Elements */
    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

  /* Class variables for HTML-Template and TS-Logic */
    columnsToDisplay = ['name', 'available', 'runtimeState'];
    expandedElement: Controller | null;
    dataSource: MatTableDataSource<Controller>;
    panelOpenState = false;
    queryMode = 'indeterminate';

  /* Inject the Service */
    constructor(
      private _controllerService: ControllerService,
      private _appTitleService: AppTitleService,
    ) { }

  /**
   * Lifecycle-hook for the creation of the app.
   */
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Controller>();
    this.loadData();
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
    this._controllerService.getObjectsForPage('', 0).subscribe(data => {
      this.dataSource.data = data;
      this.queryMode = 'determinate';
    });
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
      case 'error': return item.errorCodes;

      /* direct properties of item */
      default: return item[property];
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
