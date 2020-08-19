import { Observable } from 'rxjs';
import { Injectable, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public latitude: number;
  public longitude: number;
  public formattedAddress = "";

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  public autoComplete(nativeElement: any): void {
    this.mapsAPILoader.load().then(() => {
      // this.geoCoder = new google.maps.Geocoder();
      const autocomplete = new google.maps.places.Autocomplete(nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.formattedAddress = place.formatted_address;

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  public getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  public getLat(): number {
    return this.latitude;
  }

  public getLng(): number {
    return this.longitude;
  }

  public setLat(lat: number): void {
    this.latitude = lat;
  }

  public setLng(lng: number): void {
    this.longitude = lng;
  }

  public getFormattedAddress(): string {
    return this.formattedAddress;
  }


  // getAddress(latitude, longitude): void {
  //   this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
  //     // console.log(results);
  //     // console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         console.log(results[0].formatted_address);
  //         console.log(results[0].plus_code.compound_code); // ville, province, pays
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }
  //   });
  // }
}
