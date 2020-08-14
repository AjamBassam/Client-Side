import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IUser, User } from 'src/app/models/userModel';
import { UserService } from 'src/app/Services/user.service';
import { env } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: IUser = User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  public listYourVehicle(): void{
    // this.router.navigate([env.LIST_YOUR_VEHICLE.en], {relativeTo: this.route});
  }

  public logout(): void {
    this.userService.logout();
  }
}
