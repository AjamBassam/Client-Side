import { IVehicle } from 'src/app/models/vehicleModel';
import { Injectable } from '@angular/core';
import { RestApiService } from './restApi.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/userModel';
import { UserService } from './user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private restApiService: RestApiService) { }

  public listYourVehicle(vehicle: IVehicle): void {
    this.restApiService.post_listYourVehicle(vehicle)
      .subscribe(
        (data) => {
          console.log(data);
          // this.router.navigate(["/"]);
        },
        err => {
          console.log(err.error.msg);
        }
      );
  }

  public getVehicleRentals(lat, lng, startDate, endDate): Observable<IVehicle> {
    return this.restApiService.get_getVehicleRentals(lat, lng, startDate, endDate)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(error => {
          return throwError(error);
          // return Observable.throw(new Error("something wrong"));
        }));
  }

  public getVehicle(id: string): Observable<IVehicle> {
    console.log(id)
    return this.restApiService.get_getVehicle(id)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(error => {
          return throwError(error);
          // return Observable.throw(new Error("something wrong"));
        }));
  }

  public updateFavoriteList(vehicle: IVehicle): Observable<any> {
    return this.restApiService.post_updateFavoriteList(vehicle);
  }

}
