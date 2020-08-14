import { VehicleService } from './../../Services/vehicle.service';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IVehicle } from 'src/app/models/vehicleModel';

@Injectable()
export class VehicleResolve implements Resolve<any> {

  constructor(private vehicleService: VehicleService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IVehicle> {
    return this.vehicleService.getVehicle(route);
  }
}
