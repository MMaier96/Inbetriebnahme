import { ControllerService } from './../../../services/controller.service';
import { Controller } from './../../../objects/controller';
import { Observable } from 'rxjs';
import { AppTitleService } from 'src/app/services/app-title.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'controller-details',
  templateUrl: './controller-details.dialog.html',
  styleUrls: ['./controller-details.dialog.scss']
})
export class ControllerDetailsDialog implements OnInit, AfterContentInit {
  controllerData: Observable<Controller>;

  constructor(
    private route: ActivatedRoute,
    private _controllerService: ControllerService,
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.controllerData = this._controllerService.getObjectByProperty('name', params.get('controllerName'));
    });
  }

  /**
   * Bugfix: https://stackoverflow.com/questions/43375532/expressionchangedafterithasbeencheckederror-explained
   * setTimeout() ist needed to avoid error on changing parents data over service
   */
  ngAfterContentInit(): void {
    setTimeout(() => {
      this._appTitleService.setDetailsView(true);
    }, 0);
  }

}
