import { RestApiService } from 'src/app/Services/restApi.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebsocketService } from './services/websocket.service';
import { Events } from './models/events';
import { UserService } from './Services/user.service';
import { User, IUser } from './models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lat: any;
  lng: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private restApiService: RestApiService,
    private activatedRoute: ActivatedRoute
  ) {


   }

  ngOnInit(): void {

  }
}
