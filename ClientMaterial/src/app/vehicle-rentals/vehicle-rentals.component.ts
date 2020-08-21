import { IVehicle, ILocation } from 'src/app/models/vehicleModel';
import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { env } from 'src/environments/environment';
import { IUser } from '../models/userModel';

@Component({
  selector: 'app-vehicle-rentals',
  templateUrl: './vehicle-rentals.component.html',
  styleUrls: ['./vehicle-rentals.component.css']
})
export class VehicleRentalsComponent implements OnInit {

  public vehicleList: IVehicle[] = [];
  public location: ILocation = { latitude: null, longitude: null };
  zoom = env.ZOOM;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const user = this.route.snapshot.data.user;
    this.userService.setUser(user);
    this.vehicleList = this.route.snapshot.data.vehicleList;

    this.getInputLocation();
    console.log("basam")
  }

  public getInputLocation(): void {
    this.location.latitude = parseFloat(this.route.snapshot.paramMap.get(env.LAT));
    this.location.longitude = parseFloat(this.route.snapshot.paramMap.get(env.LNG));
  }
}
