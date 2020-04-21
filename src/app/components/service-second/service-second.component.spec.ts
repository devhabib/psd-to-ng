import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSecondComponent } from './service-second.component';

describe('ServiceSecondComponent', () => {
  let component: ServiceSecondComponent;
  let fixture: ComponentFixture<ServiceSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
