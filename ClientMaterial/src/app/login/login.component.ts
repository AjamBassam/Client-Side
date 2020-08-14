import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { IUser, User } from "../models/userModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public login(): void {
    const user: IUser = {
      email: this.email,
      password: this.password
    };

    this.userService.login(user);
  }
}
