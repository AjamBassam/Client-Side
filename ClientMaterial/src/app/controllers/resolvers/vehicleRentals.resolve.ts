import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VehicleService } from 'src/app/Services/vehicle.service';

@Injectable()
export class VehicleRentalsResolve implements Resolve<any> {
  constructor(private vehicleService: VehicleService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.vehicleService.getVehicleRentals(route);
  }
}
