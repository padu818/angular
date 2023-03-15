import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverFormNewComponent } from './driver-form-new.component';

describe('DriverComponent', () => {
  let component: DriverFormNewComponent;
  let fixture: ComponentFixture<DriverFormNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverFormNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
