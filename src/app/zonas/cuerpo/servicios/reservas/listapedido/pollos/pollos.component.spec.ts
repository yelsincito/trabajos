import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollosComponent } from './pollos.component';

describe('PollosComponent', () => {
  let component: PollosComponent;
  let fixture: ComponentFixture<PollosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
