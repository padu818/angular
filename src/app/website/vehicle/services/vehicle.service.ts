import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../../drivers/models/driver.model';
import { map } from 'rxjs';

@Injectable()
export class VehicleService {
  path = environment.path;
  endpoint = 'vehiculo';

  constructor(private http: HttpClient) {}

  getVehicles():Promise<Vehiculo[]> {
    const _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    return this.http
      .get<Vehiculo[]>(`${this.path}/${this.endpoint}`, _options)
      .toPromise().then(vehicles => {return vehicles !== undefined ?  vehicles :  []});
  }

}
