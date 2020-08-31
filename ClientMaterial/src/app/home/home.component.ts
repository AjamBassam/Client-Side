import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { MapsAPILoader } from '@agm/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    const user = this.route.snapshot.data.user;
    this.userService.setUser(user);
  }

  signOutGoogle(): void {
    this.socialAuthService.signOut().then(() => {
      console.log('User signed out.');
    });
  }
}
