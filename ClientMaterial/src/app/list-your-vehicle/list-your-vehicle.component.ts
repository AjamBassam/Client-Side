import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../Services/vehicle.service';
import { IVehicle, ILocation } from "../models/vehicleModel";
import { User } from '../models/userModel';
import { MapsAPILoader } from '@agm/core';
import { LocationService } from '../Services/location.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-your-vehicle',
  templateUrl: './list-your-vehicle.component.html',
  styleUrls: ['./list-your-vehicle.component.css']
})
export class ListYourVehicleComponent implements OnInit {

  @ViewChild('search', { static: true }) public searchElementRef: ElementRef;

  listYourVehicleForm: FormGroup = new FormGroup({
    location: new FormControl(null, [Validators.required]),
    date: new FormControl(this.setStartDate(), [Validators.required]),
  });

  constructor(
    private vehicleService: VehicleService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.autoComplete(this.searchElementRef.nativeElement);
  }

  public listYourVehicle(): void {
    if (!this.listYourVehicleForm.valid) {
      console.log('Invalid');
      return;
    }
    const vehicle: IVehicle = {
      location: {
        latitude: this.locationService.getLat(),
        longitude: this.locationService.getLng()
      },
      date: this.listYourVehicleForm.get("date").value,
      ownerId: User._id
    };
    this.vehicleService.listYourVehicle(vehicle);
  }

  public setStartDate(): string {
    return formatDate(new Date(), "yyyy-MM-dd", "en");
  }

  public setEndDate(): string {
    return formatDate(new Date().setDate(new Date().getDate() + 3), "yyyy-MM-dd", "en");
  }
}
