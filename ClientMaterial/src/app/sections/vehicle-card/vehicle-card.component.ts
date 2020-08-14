import { VehicleService } from '../../Services/vehicle.service';
import { RestApiService } from 'src/app/Services/restApi.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IVehicle } from 'src/app/models/vehicleModel';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/Services/user.service';
import { env } from 'src/environments/environment';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  @Input() public vehicle: IVehicle;
  public isFavorited = false;

  public favorite = "favorite";

  constructor(
    private router: Router,
    private restApiService: RestApiService,
    private userService: UserService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    if (User.favorites !== undefined) {
      if (User.favorites.indexOf(this.vehicle._id) > -1) {
        this.favorite = "unfavorite";
      } else {
        this.favorite = "favorite";
      }
    }
  }

  public updateFavoriteList(): void {
    // if (User._id) {
    //   this.vehicleService.updateFavoriteList(this.vehicle._id)
    //     .subscribe((data) => {
    //       if (data.msg === true) {
    //         this.favorite = "unfav";
    //       } else {
    //         this.favorite = "fav";
    //       }
    //     });
    // } else {
    //   // alert("login first");
    //   console.log("login first");
    // }
  }

  public goToVehicleProfile(): void {
    this.router.navigate([env.VEHICLE.en, this.vehicle._id]);
  }

}
