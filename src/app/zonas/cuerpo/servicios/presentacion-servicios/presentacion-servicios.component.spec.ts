import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionServiciosComponent } from './presentacion-servicios.component';

describe('PresentacionServiciosComponent', () => {
  let component: PresentacionServiciosComponent;
  let fixture: ComponentFixture<PresentacionServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
