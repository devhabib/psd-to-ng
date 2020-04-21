import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFirstComponent } from './service-first.component';

describe('ServiceFirstComponent', () => {
  let component: ServiceFirstComponent;
  let fixture: ComponentFixture<ServiceFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
