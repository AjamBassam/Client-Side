import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../Services/vehicle.service';
import { IVehicle, ILocation } from "../models/vehicleModel";
import { User } from '../models/userModel';
import { MapsAPILoader } from '@agm/core';
import { LocationService } from '../Services/location.service';

@Component({
  selector: 'app-list-your-vehicle',
  templateUrl: './list-your-vehicle.component.html',
  styleUrls: ['./list-your-vehicle.component.css']
})
export class ListYourVehicleComponent implements OnInit {

  @ViewChild('search', { static: true }) public searchElementRef: ElementRef;
  public location: ILocation = { latitude: null, longitude: null };

  public date = "";
  public price: number;
  public ownerId = "";

  constructor(
    private vehicleService: VehicleService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.autoComplete(this.searchElementRef.nativeElement);
  }

  public listYourVehicle(): void {
    const vehicle: IVehicle = {
      location: {
        latitude: this.locationService.getLat(),
        longitude: this.locationService.getLng()
      },
      date: this.date,
      price: this.price,
      ownerId: User._id
    };
    this.vehicleService.listYourVehicle(vehicle);
  }
}
