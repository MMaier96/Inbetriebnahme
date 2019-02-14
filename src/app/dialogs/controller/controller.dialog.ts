import { AppTitleService } from './../../services/app-title.service';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { TransportUnit } from '../../objects/transport-unit';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import {Location} from '@angular/common';

@Component({
  selector: 'controller-dialog',
  styleUrls: ['controller.dialog.scss'],
  templateUrl: 'controller.dialog.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ControllerDialog implements OnInit, AfterContentInit {
  /* Load Elements from Template */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* Data for Template */
  dataSource: MatTableDataSource<TransportUnit>;
  columnsToDisplay = ['name', 'status'];
  maxItems: number;
  searchValue: string;
  filter: string;
  mode = 'indeterminate';

  /* Inject the Service */
  constructor(
    private _tuService: TransportUnitService,
    private _appTitleService: AppTitleService,
    private route: ActivatedRoute,
    private location: Location) { }

  /* Lifcycle-Hook onCreation */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.filter = params.get('filter');
    });
    this.dataSource = new MatTableDataSource<TransportUnit>();
    this.loadData(this.filter);
    this.dataSource.paginator = this.paginator;
    this.paginator.getNumberOfPages = () => this.maxItems / this.paginator.pageSize;
    this.dataSource.sortingDataAccessor = (item, property) => {

      switch (property) {
        /* nested properties of item */
        case 'type': return item.type.name;
        case 'location': return item.location.name;
        case 'order': return item.activeTransportOrder.isActive;
        case 'error': return item.location.hasTu;

        /* direct properties of item */
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  /* Load data from Service */
  loadData(filter?: string) {
    this._tuService.getAllTransportUnits(filter).subscribe(data => {
      this.dataSource.data = data;
      this.mode = 'determinate';
    });
    this._tuService.getAllTransportUnitsCount(filter).subscribe(data => this.maxItems = data);
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

  search(filter) {
    this.location.replaceState('transport-units/' + filter);
    this.loadData(filter);
    this.dataSource.paginator.firstPage();
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
