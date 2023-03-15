import { Component, Input, OnInit } from '@angular/core';
import { Driver, Vehiculo } from '../../models/driver.model';
import { Validators, FormBuilder } from '@angular/forms';
import { DriversService } from '../../service/drivers.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { VehicleService } from 'src/app/website/vehicle/services/vehicle.service';

interface IVehicle {
  patente_1: string;
  id: number;
}

interface IFormDriver {
  apellidoNombre?: string | null;
  documento?: number | null;
  telefono?: string |null;
  telefonoAuxiliar?: string | null;
  mail?: string | null;
  vehiculo?: IVehicle | null;
}

@Component({
  selector: 'app-driver-form-edit',
  templateUrl: './driver-form-edit.component.html',
  styleUrls: ['./driver-form-edit.component.scss'],
})
export class DriverFormEditComponent implements OnInit {
  @Input() driver!: Driver;
  vehicles!: IVehicle[];

  driverForm = this.fb.group({
    apellidoNombre: [
      this.driver? this.driver.apellidoNombre : null,
      Validators.required,
    ],
    documento: [
      this.driver? this.driver.documento : null,
      Validators.required,
    ],
    telefono: [
      this.driver ? this.driver.telefono : null,
      [Validators.pattern('^[0-9]*$')],
    ],
    telefonoAuxiliar: [
      this.driver ? this.driver.telefonoAuxiliar : null,
      [Validators.pattern('^[0-9]*$')],
    ],
    mail: [
      this.driver? this.driver.mail : null,
      Validators.email,
    ],
    vehiculo: [this.driver? this.driver.vehiculo : null],
  });

  onSubmit(data: IFormDriver) {
    const result: Driver = parseDataToUpdate(data, this.driver.id);
    this.driverService.updateDriver(result);
    this.router.navigate(['webside/choferes/']);
  }

  constructor(
    private fb: FormBuilder,
    private driverService: DriversService,
    private router: Router,
    private vehicleService: VehicleService
  ) {}
  ngOnInit(): void {
    this.vehicleService.getVehicles().then((vehicles: Vehiculo[]) => {
      this.vehicles = vehicles.map((vehicle) => ({
        patente_1: vehicle.patente_1,
        id: vehicle.id,
      }));
   });
  }
}

function parseDataToUpdate(data: IFormDriver, id: number) {
  const driver: Driver = {
    id: id,
    vehiculo:
      data.vehiculo !== undefined && data.vehiculo !== null
        ? parseIVehicleToVehicle(data.vehiculo)
        : null,
    mail: data.mail !== undefined ? data.mail : '',
    telefono: data.telefono !== undefined ? data.telefono : null,
    telefonoAuxiliar:
      data.telefonoAuxiliar !== undefined ? data.telefonoAuxiliar : null,
    documento:
      data.documento !== undefined && data.documento !== null
        ? data.documento
        : 0,
    apellidoNombre:
      data.apellidoNombre !== null && data.apellidoNombre !== undefined
        ? data.apellidoNombre
        : '',
  };
  return driver;
}

function parseIVehicleToVehicle(iVehicle: IVehicle): Vehiculo {
  return {
    id: iVehicle.id !== null && iVehicle?.id !== undefined ? iVehicle.id : 0,
    patente_1: iVehicle.patente_1,
    patente_2: '',
    codigo: '',
    cargaMaxima: undefined,
    volumenMaximo: undefined,
    posicionesTotales: undefined,
    posicionesAcoplado: undefined,
    chofer: null,
  };
}
