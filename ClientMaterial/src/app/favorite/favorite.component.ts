import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/userModel';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public favoriteList: string[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.favoriteList = User.favorites; // je passe un string mais il faut passer une vehicule complete
  }
}
