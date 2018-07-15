/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboveComponent } from './above.component';

describe('AboveComponent', () => {
  let component: AboveComponent;
  let fixture: ComponentFixture<AboveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
