import { EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversService } from './service/drivers.service';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { Router, RouterModule } from '@angular/router';
import { PrimeNG } from 'src/app/primeng/primeng.module';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { DriverFormEditComponent } from './components/driver-form-edit/driver-form-edit.component';
import { DriverFormNewComponent } from './components/driver-form-new/driver-form-new.component';
import { DriverComponent } from './components/driver/driver.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { VehicleService } from '../vehicle/services/vehicle.service';

@NgModule({
  declarations: [
    DriverListComponent,
    DriverDetailsComponent,
    DriverFormEditComponent,
    DriverFormNewComponent,
    DriverComponent,
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    TableModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [DriversService,VehicleService],
})
export class DriversModule {}
