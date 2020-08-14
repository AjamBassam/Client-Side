import { UserService } from 'src/app/Services/user.service';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from 'src/app/models/userModel';

@Injectable()
export class UserResolve implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    return this.userService.getUser();
  }
}
