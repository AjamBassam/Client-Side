import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { IUser } from "../models/userModel";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email = "";
  public password = "";
  public firstName = "";
  public lastName = "";

  // registerForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.email, Validators.required]),
  //   password: new FormControl(null, Validators.required),
  //   firstname: new FormControl(null, Validators.required),
  //   lastName: new FormControl(null, Validators.required),
  // });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public register(): void {
    const user: IUser = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.userService.register(user);
  }
}
