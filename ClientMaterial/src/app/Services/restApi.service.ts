import { IVehicle } from 'src/app/models/vehicleModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, catchError } from "rxjs/operators";
import { env } from 'src/environments/environment';
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

  post_socialLogin(data: object): Observable<IUser> {
    return this.http.post<IUser>(env.SERVER_URL + "/" + env.SOCIAL_LOGIN.en, data, { withCredentials: true });
  }

  // ----------------------------------------------------------------------------------------------

  get_getVehicleRentals(lat, lng, startDate, endDate): Observable<IVehicle> {
    return this.http.get<IVehicle>
      (env.SERVER_URL + "/" + env.VEHICLE_RENTALS.en + "/" +
        lat + "/" + lng + "/" + startDate + "/" + endDate, { withCredentials: true });
  }

  get_getVehicle(id: string): Observable<IVehicle> {
    return this.http.get<IVehicle>
      (env.SERVER_URL + "/" + env.VEHICLE.en + "/" + id, { withCredentials: true });
  }

  post_listYourVehicle(data: IVehicle): Observable<IVehicle> {
    return this.http.post<IVehicle>(env.SERVER_URL + "/" + env.LIST_YOUR_VEHICLE.en, data, { withCredentials: true });
  }

  post_updateFavoriteList(v: IVehicle): Observable<any> {
    return this.http.post<any>(env.SERVER_URL + "/" + env.FAVORITES.en, { vehicle: v }, { withCredentials: true });
  }

  // async post_updateFavoriteList(vehicleId: string) {
  //   const c =
  // await this.http.post<any>(env.SERVER_URL + "/" + env.FAVORITES.en, { _id: vehicleId }, { withCredentials: true }).toPromise();
  //   console.log(c);
  //   return c;
  // }
}
