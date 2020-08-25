import { UserService } from 'src/app/Services/user.service';
import { IVehicle } from 'src/app/models/vehicleModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    const user = this.route.snapshot.data.user;
    this.userService.setUser(user);
    const vehicle = this.route.snapshot.data.vehicle;
  }
}
