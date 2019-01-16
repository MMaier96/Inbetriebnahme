import { WamasButtonComponent } from './../wamas-button-component/wamas-button.component';

import { ComponentRef, ComponentFactoryResolver, Component, Input, ViewChild, ViewContainerRef,
  Compiler, ChangeDetectorRef, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'wamas-table-cell',
  templateUrl: './wamas-table-cell.component.html',
  styleUrls: ['./wamas-table-cell.component.scss']
})
export class WamasTableCellComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() component;
  cmpRef: ComponentRef<any>;
  private isViewInitialized = false;

  constructor(
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

    const factory = this.componentFactoryResolver.resolveComponentFactory(WamasButtonComponent);
    this.cmpRef = this.target.createComponent(factory);
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
