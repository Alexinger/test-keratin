import { Component, ContentChild, Input, AfterViewInit, Injector, Inject } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { sbConfig } from './sb.config';

@Component({
  exportAs: 'sbItem',
  selector: 'mdb-item',
  templateUrl: 'sb-item.html'
})
export class SBItemComponent implements AfterViewInit {

  private squeezebox: any;

  @Input() public collapsed = true;
  private parentSbItem: SBItemBodyComponent;

  @ContentChild(SBItemBodyComponent) body: SBItemBodyComponent;
  collapseTimer: NodeJS.Timer;

  constructor(private inj: Injector) {
    this.squeezebox = sbConfig.serviceInstance;
  }

  ngAfterViewInit() {
    this.body.toggle(this.collapsed);
  }

  toggle(collapsed: boolean) {
    this.squeezebox.didItemToggled(this);
    this.applyToggle(collapsed);
    if (collapsed) {
      clearInterval(this.collapseTimer);
    } else { this.collapseTimer = setInterval(() => this.body.updateHeight(), 500); }
  }

  applyToggle(collapsed: boolean) {
    this.collapsed = collapsed;
    this.body.toggle(collapsed);
  }

}
