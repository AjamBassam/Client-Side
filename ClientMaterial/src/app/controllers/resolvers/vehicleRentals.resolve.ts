import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VehicleService } from 'src/app/Services/vehicle.service';
import { env } from 'src/environments/environment';

@Injectable()
export class VehicleRentalsResolve implements Resolve<any> {
  constructor(private vehicleService: VehicleService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.vehicleService.getVehicleRentals(
      route.paramMap.get(env.LAT), route.paramMap.get(env.LNG), route.paramMap.get(env.START_DATE), route.paramMap.get(env.END_DATE));
  }
}
