import { IVehicle } from 'src/app/models/vehicleModel';
import { Injectable } from '@angular/core';
import { RestApiService } from './restApi.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private restApiService: RestApiService, private router: Router) { }

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

  public getVehicleRentals(route: ActivatedRouteSnapshot): Observable<IVehicle> {
    return this.restApiService.get_getVehicleRentals(route)
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

  public getVehicle(route: ActivatedRouteSnapshot): Observable<IVehicle> {
    return this.restApiService.get_getVehicle(route)
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

  public updateFavoriteList(vehicleId: string): void {
    this.restApiService.post_updateFavoriteList(vehicleId)
      .subscribe((data) => {
        if (data.msg === true) {
          // this.favorite = "unfav";
        } else {
          // this.favorite = "fav";
        }
      });
  }
}
