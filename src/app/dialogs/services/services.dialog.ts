import { AppTitleService } from './../../services/app-title.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/objects/service';

@Component({
  selector: 'services-dialog',
  styleUrls: ['services.dialog.scss'],
  templateUrl: 'services.dialog.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ServicesDialog implements OnInit, AfterContentInit {
  /* Data for Template */
  dataSource: MatTableDataSource<Service>;
  columnsToDisplay = ['name', 'status', 'daemon', 'start', 'stop'];
  maxItems: number;
  mode = 'indeterminate';

  /* Inject the Service */
  constructor(
    private _servicesService: ServicesService,
    private _appTitleService: AppTitleService,
  ) { }

  /* Lifcycle-Hook onCreation */
  ngOnInit() {
    this.dataSource = new MatTableDataSource<Service>();
    this.loadData();
  }

  /* Load data from Service */
  loadData() {
    this._servicesService.getAllServices().subscribe(data => {
      this.dataSource.data = data;
      this.mode = 'determinate';
    });
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
