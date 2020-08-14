import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User, IUser } from '../models/userModel';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: IUser = User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
  }

  clickme(): void {
    console.log(User);
  }
}
