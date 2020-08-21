import { LoginComponent } from './../../login/login.component';
import { RegisterComponent } from './../../register/register.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IUser, User } from 'src/app/models/userModel';
import { UserService } from 'src/app/Services/user.service';
import { env } from 'src/environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user: IUser = User;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public openRegisterModal(): void {
    this.modalService.open(RegisterComponent, {
      centered: true,
    });
  }

  public openLoginModal(): void {
    this.modalService.open(LoginComponent, {
      centered: true,
    });
  }

  public listYourVehicle(): void {
    // this.router.navigate([env.LIST_YOUR_VEHICLE.en], {relativeTo: this.route});
  }

  public logout(): void {
    this.userService.logout();
  }
}
