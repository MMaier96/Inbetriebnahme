import { ActivatedRoute } from '@angular/router';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { AppTitleService } from './services/app-title.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy, OnInit, AfterContentInit {
  /* Settings for general APP */
  appTitle: String;
  isDetailsView: boolean;
  loggedIn = false;

  /* Mobile Listener */
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  /* NavItems */
  navItems = [{
    routerLink: 'dashboard',
    name: 'Dashboard',
    icon: './assets/icons/dark/dashboard.svg'
  }, {
    routerLink: 'controller',
    name: 'Controller',
    icon: './assets/icons/dark/controller.svg'
  }, {
    routerLink: 'transport-units',
    name: 'TransportUnits',
    icon: './assets/icons/dark/transport-unit.svg'
  }, {
    routerLink: 'transport-orders',
    name: 'TransportOrders',
    icon: './assets/icons/dark/transport-order.svg'
  }, {
    routerLink: 'locations',
    name: 'Locations',
    icon: './assets/icons/dark/locations.svg'
  }, {
    routerLink: 'services',
    name: 'Services',
    icon: './assets/icons/dark/services.svg'
  }];

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public _appTitleService: AppTitleService,
    private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1023px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    if ( localStorage.getItem('graphql-token') != null) {
      this.loggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  navigateBack(): void {
    window.history.back();
  }

  ngAfterContentInit(): void {
    if (this.loggedIn) {
      this._appTitleService.isDetailsView.subscribe( isDetailsView => {
        this.isDetailsView = isDetailsView;
        if (!isDetailsView) {
          const routeName = this.route.snapshot['_routerState'].url.replace('/', '');
          for (const item of this.navItems) {
            if (item.routerLink === routeName) {
              this.appTitle = item.name;
            }
          }
        }
      });
    }
  }

  navItemClick(snav, item): void {
    snav.toggle();
    this.appTitle = item.name;
  }

  reload(): void {
    location.reload();
  }
}
