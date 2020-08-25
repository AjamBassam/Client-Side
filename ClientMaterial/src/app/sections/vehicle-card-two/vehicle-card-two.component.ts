import { IVehicle } from 'src/app/models/vehicleModel';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/Services/vehicle.service';
import { env } from 'src/environments/environment';

@Component({
  selector: 'app-vehicle-card-two',
  templateUrl: './vehicle-card-two.component.html',
  styleUrls: ['./vehicle-card-two.component.css']
})
export class VehicleCardTwoComponent implements OnInit {

  @Input() public vehicle: IVehicle;
  public isFavorited = false;

  public favorite: string;

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.favorite = "Remove from favorite list";
  }

  public updateFavoriteList(): void {
    this.vehicleService.updateFavoriteList(this.vehicle).subscribe(
      (data) => {
        if (data.msg === "removed") {
          // Add a popup to confirm the decision
          document.location.href = env.CLIENT_URL + this.router.url;
        }
        else {
          console.log("error occurred in procedure");
        }
      },
      err => {
        console.log(err.error.msg);
      }
    );
  }

  public goToVehicleProfile(): void {
    this.router.navigate([env.VEHICLE.en, this.vehicle._id]);
  }
}
