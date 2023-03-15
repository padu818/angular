import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  path = environment.path;
  endpoint = 'auth/signin';

  currentUser!: User;

  constructor(private http: HttpClient) {}

  login(user: User) {
    let result: boolean = false;
    const _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(`${this.path}/${this.endpoint}`, user, _options)
      .pipe(
        tap((response: any) => {
          this.currentUser = <User>response['accessToken'];
          localStorage.setItem('token',response['accessToken'] );
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      )
      .toPromise();
  }


  getToken() {
    return localStorage.getItem('token');
  }

  checkAuthenticationStatus(){
    localStorage.getItem('token') != null ? true : false;
  }
}
