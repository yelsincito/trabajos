import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso1Component } from './piso1.component';

describe('Piso1Component', () => {
  let component: Piso1Component;
  let fixture: ComponentFixture<Piso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
