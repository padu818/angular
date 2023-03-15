import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { Observable, switchMap } from 'rxjs';
import { DriversService } from '../../service/drivers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss'],
})
export class DriverDetailsComponent implements OnInit {
  driver$!: Observable<Driver | undefined>;
  booleano: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private driverService: DriversService,
    private fb: FormBuilder
  ) {
    this.driver$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.driverService.getDriver(id);
      })
    );
  }
  ngOnInit(): void {}

  edit() {
    this.booleano = true
  }
}
