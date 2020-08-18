import { LocationService } from '../../Services/location.service';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'src/environments/environment';
import { ILocation } from 'src/app/models/vehicleModel';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  @ViewChild('search', { static: true }) public searchElementRef: ElementRef;

  // // public location: ILocation = { latitude: null, longitude: null, city: "MONTREAL" };

  public dateRange = "14-01-2020-20-02-2020";
  constructor(
    private router: Router,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationService.autoComplete(this.searchElementRef.nativeElement);
  }

  searchVehicles(): void {
    this.router.navigate([
      env.VEHICLE_RENTALS.en,
      this.locationService.getLat(),
      this.locationService.getLng(),
      this.dateRange
    ]);
  }

  public getCurrentLocation(): void {
    this.locationService.getCurrentLocation();
  }
}
