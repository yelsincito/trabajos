import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrescoComponent } from './refresco.component';

describe('RefrescoComponent', () => {
  let component: RefrescoComponent;
  let fixture: ComponentFixture<RefrescoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrescoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
