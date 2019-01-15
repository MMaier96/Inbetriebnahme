import { WamasPaginatorService } from '../../../services/wamas-services/wamas-paginator.service';
import { WamasTableService } from '../../../services/wamas-services/wamas-table.service';
import { Component, Input, OnInit, OnDestroy, ViewChild, ViewContainerRef, Compiler, ChangeDetectorRef,
  ComponentFactoryResolver, ComponentRef, OnChanges, AfterViewInit } from '@angular/core';
import { WamasButtonComponent } from '../wamas-button/wamas-button.component';

@Component({
  selector: 'app-wamas-table',
  templateUrl: './wamas-table.component.html',
  styleUrls: ['./wamas-table.component.scss']
})
export class WamasTableComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() tableData;
  @ViewChild('cellComponent', { read: ViewContainerRef}) cellComponent;
  cmpRef: ComponentRef<any>;
  isViewInitialized = false;

  change = this._wamasPaginatorService.getIndex();

  constructor(
    public _wamasTableService: WamasTableService,
    public _wamasPaginatorService: WamasPaginatorService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _compiler: Compiler,
    private _cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.tableData);
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    const factory = this._componentFactoryResolver.resolveComponentFactory(WamasButtonComponent);
    this.cmpRef = this.cellComponent.createComponent(factory);
    this._cdRef.detectChanges();
  }

}
