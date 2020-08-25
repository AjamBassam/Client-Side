import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { IUser, User } from "../models/userModel";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput', { static: true }) public elem: ElementRef;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private userService: UserService,
              private activeModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.elem.nativeElement.focus();
    }, 0);
  }

  public login(): void {
    if (!this.loginForm.valid) {
      console.log('Invalid');
      return;
    }

    const user: IUser = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value
    };

    this.userService.login(user);
  }

  public forgetPassword(): void {

  }

  public openRegisterModal(): void {
    this.activeModal.close();
    this.modalService.open(RegisterComponent, {
      centered: true,
    });
  }

  public closeLoginModal(): void {
    this.activeModal.close();
  }

}
