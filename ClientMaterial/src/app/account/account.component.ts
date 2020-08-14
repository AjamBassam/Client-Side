import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, User } from '../models/userModel';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user: IUser = User;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  public deleteAccount(): void {
    this.userService.deleteAccount();
  }
}
