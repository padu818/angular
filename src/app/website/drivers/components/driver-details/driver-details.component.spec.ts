import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailsComponent } from './driver-details.component';

describe('DriverComponent', () => {
  let component: DriverDetailsComponent;
  let fixture: ComponentFixture<DriverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
