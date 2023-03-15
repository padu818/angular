import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverFormEditComponent } from './driver-form-edit.component';

describe('DriverComponent', () => {
  let component: DriverFormEditComponent;
  let fixture: ComponentFixture<DriverFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
