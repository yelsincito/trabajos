import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaseosasComponent } from './gaseosas.component';

describe('GaseosasComponent', () => {
  let component: GaseosasComponent;
  let fixture: ComponentFixture<GaseosasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaseosasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaseosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
