import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso3Component } from './paso3.component';

describe('Paso3Component', () => {
  let component: Paso3Component;
  let fixture: ComponentFixture<Paso3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paso3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
