import { LocationService } from './../../../services/locations.service';
import { Location } from './../../../objects/location';
import { Observable } from 'rxjs';
import { AppTitleService } from 'src/app/services/app-title.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'locations-details',
  templateUrl: './locations-details.dialog.html',
  styleUrls: ['./locations-details.dialog.scss']
})
export class LocationsDetailsDialog implements OnInit, AfterContentInit {
  locData: Observable<Location>;

  constructor(
    private route: ActivatedRoute,
    private _locService: LocationService,
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locData = this._locService.getObjectByProperty('name', params.get('locName'));
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
