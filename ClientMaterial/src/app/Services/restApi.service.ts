import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, catchError } from "rxjs/operators";
import { env } from 'src/environments/environment';
import { IVehicle } from '../models/vehicleModel';
import { ActivatedRouteSnapshot } from '@angular/router';
import { IUser, User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  get(extension: string): Observable<any> {
    return this.http.get<any>(env.SERVER_URL + "/" + extension, { withCredentials: true });
  }

  post(extension: string, data: any): Observable<any> {
    return this.http.post<any>(env.SERVER_URL + "/" + extension, data, { withCredentials: true });
  }

  // ----------------------------------------------------------------------------------------------

  post_getUser(data: object): Observable<IUser> {
    return this.http.post<IUser>(env.SERVER_URL + "/" + env.USER, data, { withCredentials: true });
  }

  post_register(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(env.SERVER_URL + "/" + env.REGISTER.en, data, { withCredentials: true });
  }


  post_login(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(env.SERVER_URL + "/" + env.LOGIN.en, data, { withCredentials: true });
  }

  post_logout(data: object): Observable<any> {
    return this.http.post<any>(env.SERVER_URL + "/" + env.LOGOUT, data, { withCredentials: true });
  }

  post_delete(data: object): Observable<any> {
    return this.http.post<any>(env.SERVER_URL + "/" + env.ACCOUNT.en + "/" + env.DELETE, data, { withCredentials: true });
  }

  // ----------------------------------------------------------------------------------------------

  get_getVehicleRentals(route: ActivatedRouteSnapshot): Observable<IVehicle> {
    return this.http.get<IVehicle>
      (env.SERVER_URL + "/" + env.VEHICLE_RENTALS.en + "/" + route.paramMap.get(env.DATE_RANGE), { withCredentials: true });
  }

  get_getVehicle(route: ActivatedRouteSnapshot): Observable<IVehicle> {
    return this.http.get<IVehicle>
      (env.SERVER_URL + "/" + env.VEHICLE.en + "/" + route.paramMap.get(env.ID), { withCredentials: true });
  }

  post_listYourVehicle(data: IVehicle): Observable<IVehicle> {
    return this.http.post<IVehicle>(env.SERVER_URL + "/" + env.LIST_YOUR_VEHICLE.en, data, { withCredentials: true });
  }

  post_updateFavoriteList(vehicleId: string): Observable<any> {
    return this.http.post<any>(env.SERVER_URL + "/" + env.FAVORITES.en, { _id: vehicleId }, { withCredentials: true });
  }
}
