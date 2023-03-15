import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Driver } from '../models/driver.model';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class DriversService {
  path = environment.path;
  endpoint = 'choferes';

  constructor(private http: HttpClient) {}

  getDrivers():Promise<Driver[]> {
    const _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    return this.http
      .get<Driver[]>(`${this.path}/${this.endpoint}`, _options)
      .toPromise().then(drivers => {return drivers !== undefined ?  drivers :  []});
  }

  async updateDriver(driver:Driver){
    const _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
/*         Accept: 'application/json', */
      }),
    };

    const result = await this.http
      .put<any>(`${this.path}/${this.endpoint}/${driver.id}`, driver, _options)
      .toPromise();
    console.log(result + "conseguido");
  }

  getDriver(id:number):Promise<Driver|undefined> {
    const _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };
    return this.http
      .get<Driver>(`${this.path}/${this.endpoint}/${id}`, _options)
      .toPromise().then(driver => {return driver});
  }
}
