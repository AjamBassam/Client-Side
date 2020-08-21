import { VehicleService } from 'src/app/Services/vehicle.service';
import { LoginComponent } from './../../login/login.component';
import { RestApiService } from 'src/app/Services/restApi.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IVehicle } from 'src/app/models/vehicleModel';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/Services/user.service';
import { env } from 'src/environments/environment';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  @Input() public vehicle: IVehicle;
  public isFavorited = false;

  public favorite = "Add to favorite list";

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    console.log(this.vehicle)

    this.initialize();
  }

  public initialize(): void {
    if (User.favorites !== undefined) {
      if (User._id) {
        if (User.favorites.indexOf(this.vehicle._id) > -1) {
          this.favorite = "Remove from favorite list";
        }
      }
    }
  }

  public updateFavoriteList(): void {
    if (!User._id) {
      this.openLoginModal();
    } else {
      this.vehicleService.updateFavoriteList(User._id)
        .subscribe((data) => {
          if (data.msg === true) {
            console.log("add to favorite list");
            this.favorite = "add to favorite list";
          } else {
            console.log("remove frome favorite list")
            this.favorite = "remove frome favorite list";
          }
        });
    }
  }

  public goToVehicleProfile(): void {
    this.router.navigate([env.VEHICLE.en, this.vehicle._id]);
  }

  public openLoginModal(): void {
    alert("login firsttt");
    this.activeModal.close();
    this.modalService.open(LoginComponent, {
      centered: true,
    });
  }

}
