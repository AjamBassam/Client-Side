import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { IUser } from "../models/userModel";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('emailInput', { static: true }) public elem: ElementRef;

  public registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
  });

  constructor(private userService: UserService,
              public activeModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.elem.nativeElement.focus();
    }, 0);
  }

  public register(): void {
    if (!this.registerForm.valid) {
      console.log('Invalid');
      return;
    }

    const user: IUser = {
      email: this.registerForm.get("email").value,
      password: this.registerForm.get("password").value,
      firstName: this.registerForm.get("firstName").value,
      lastName: this.registerForm.get("lastName").value
    };

    this.userService.register(user);
  }

  public openLoginModal(): void {
    this.activeModal.close();
    // this.modalService.open(LoginComponent, { centered: true, });
  }

  closeRegisterModal(): void {
    this.activeModal.close();
  }
}
