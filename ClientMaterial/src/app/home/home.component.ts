import { homeScripts } from './../scripts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    // const user = this.route.snapshot.data.user;
    // this.userService.setUser(user);

    homeScripts.forEach((script) => {
      const s = this.renderer2.createElement('script');
      s.type = 'text/javascript';
      s.src = script;
      s.text = ``;
      this.renderer2.appendChild(this.document.body, s);
    });
    console.log("component1")


  }
}
