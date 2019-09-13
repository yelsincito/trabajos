import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso0Component } from './piso0.component';

describe('Piso0Component', () => {
  let component: Piso0Component;
  let fixture: ComponentFixture<Piso0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
