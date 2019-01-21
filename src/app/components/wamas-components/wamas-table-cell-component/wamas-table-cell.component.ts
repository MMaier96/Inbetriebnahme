import { WamasTableService } from 'src/app/services/wamas-services/wamas-table-service/wamas-table.service';

import { ComponentRef, ComponentFactoryResolver, Component, Input, ViewChild, ViewContainerRef,
  Compiler, ChangeDetectorRef, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'wamas-table-cell',
  templateUrl: './wamas-table-cell.component.html',
  styleUrls: ['./wamas-table-cell.component.scss']
})
export class WamasTableCellComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() element;
  @Input() column;

  cmpRef: ComponentRef<any>;
  private isViewInitialized = false;

  constructor(
    private _wamasTableService: WamasTableService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private cdRef: ChangeDetectorRef) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    const component = this._wamasTableService.getComponentFunction()(this.column);
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);

    this.cmpRef = this.target.createComponent(factory);
    this.cmpRef.instance.setData(this.element[this.column]);



    this.cdRef.detectChanges();
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

}
