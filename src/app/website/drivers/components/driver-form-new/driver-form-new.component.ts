import { Component } from '@angular/core';
import { Driver } from '../../models/driver.model';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-form-new.component.html',
  styleUrls: ['./driver-form-new.component.scss']
})
export class DriverFormNewComponent {

  driver!: Driver;

  constructor(){

  }
}
