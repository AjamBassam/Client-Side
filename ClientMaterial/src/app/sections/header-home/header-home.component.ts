import { LocationService } from '../../Services/location.service';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'src/environments/environment';
import { ILocation } from 'src/app/models/vehicleModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) public searchElementRef: ElementRef;
  
  searchForm: FormGroup = new FormGroup({
    location: new FormControl(null, [Validators.required]),
    startDate: new FormControl(this.setStartDate(), [Validators.required]),
    endDate: new FormControl(this.setEndDate(), [Validators.required])
  });
  
  dt;

  constructor(
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.autoComplete(this.searchElementRef.nativeElement);
    this.searchElementRef.nativeElement.focus();
  }

  onFormSubmit(): void {
    if (this.locationService.getLat() != null) {
      this.router.navigate([
        env.VEHICLE_RENTALS.en,
        this.locationService.getLat(),
        this.locationService.getLng(),
        this.searchForm.get("startDate").value,
        this.searchForm.get("endDate").value
      ]);

      this.locationService.setLat(null);
      this.locationService.setLng(null);
    }
  }

  public getCurrentLocation(): void {
    this.locationService.getCurrentLocation();
  }

  public setStartDate(): string {
    return formatDate(new Date(), "yyyy-MM-dd", "en");
  }

  public setEndDate(): string {
    return formatDate(new Date().setDate(new Date().getDate() + 3), "yyyy-MM-dd", "en");
  }

  public clearInput(): void {
    if (this.locationService.getLat() == null) {
      this.searchElementRef.nativeElement.value = "bassam";
    }
  }
}
