import { PfModule } from 'app/common/pf.module';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import 'hammerjs';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  setupTestBed({
    declarations: [
      AppComponent
    ],
    imports: [PfModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(), RouterModule.forRoot([]), RouterModule.forRoot([])],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
