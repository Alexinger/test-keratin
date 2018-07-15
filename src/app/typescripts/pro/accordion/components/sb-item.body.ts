import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  exportAs: 'sbItemBody',
  selector: 'mdb-item-body',
  templateUrl: 'sb-item.body.html'
})
export class SBItemBodyComponent {

  @ViewChild('body') bodyEl: ElementRef;

  constructor(private renderer: Renderer) { }

  toggle(collapsed: boolean) {
    if (collapsed) {
      return this.renderer.setElementStyle(this.bodyEl.nativeElement, 'max-height', '0px');
    }
    setTimeout(() => this.updateHeight(), 50);
  }

  updateHeight() {
    let newHeight = this.bodyEl.nativeElement.firstElementChild.scrollHeight;
    if (newHeight < 10) { return; }
    newHeight = newHeight + 'px';
    if (newHeight === this.bodyEl.nativeElement.style['max-height']) { return; }
    this.renderer.setElementStyle(this.bodyEl.nativeElement, 'max-height', newHeight);
  }
}
