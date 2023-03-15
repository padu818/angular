import { Component,  Input, OnInit, Output } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { DriversService } from '../../service/drivers.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private driverService: DriversService,
    private router: Router) {}
  ngOnInit() {
    this.driverService.getDrivers().then((drivers: Driver[]) => {
      this.drivers = drivers;
    });
  }

  onClickedChofer(id: any) {
     this.router.navigate(['/webside/choferes', id]);  
/*      this.router.navigate([`/${id}`]) */
  }
}

