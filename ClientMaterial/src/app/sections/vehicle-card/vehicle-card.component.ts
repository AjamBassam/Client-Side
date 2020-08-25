import { IVehicle } from 'src/app/models/vehicleModel';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/userModel';
import { env } from 'src/environments/environment';
import { LoginComponent } from './../../login/login.component';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  @Input() public vehicle: IVehicle;
  @Input() public onMap: boolean;
  public isFavorited = false;

  public favorite: string;

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {

    console.log("bassam")
    if (User.favorites === undefined || User.favorites.length === 0) {
      this.favorite = "dd to favorite list";
    } else {
      for (const v of User.favorites) {
        if (this.vehicle._id === v._id) {
          this.favorite = "remove from favorite list";
          break;
        } else {
          this.favorite = "add to favorite list";
        }
      }
    }
  }

  public updateFavoriteList(): void {
    if (!User._id) {
      this.openLoginModal();
    } else {
      this.vehicleService.updateFavoriteList(this.vehicle).subscribe(
        (data) => {
          if (data.msg === "removed") {
            this.favorite = "Add to favorite list";
          } else {
            this.favorite = "Remove from favorite list";
          }
        },
        err => {
          console.log(err.error.msg);
        }
      );
    }
  }

  public goToVehicleProfile(): void {
    this.router.navigate([env.VEHICLE.en, this.vehicle._id]);
  }

  public openLoginModal(): void {
    alert("Login first please!");
    this.activeModal.close();
    this.modalService.open(LoginComponent, {
      centered: true,
    });
  }

}


// if (User.favorites.indexOf(this.vehicle._id) > -1) {
//   this.favorite = "Remove from favorite list";
// } else {
//   this.favorite = "Add to favorite list";
// }