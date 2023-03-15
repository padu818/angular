import { Component, Input, Output } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-driver-format-table',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
  @Input()
  driver!: Driver;
  @Output() clickedChofer = new EventEmitter<number>();
  @Output() addCartProduct = new EventEmitter<Driver>();

  viewDetail() {
    this.clickedChofer.emit(this.driver.id);
  }
}
