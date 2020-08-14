import { UserService } from 'src/app/Services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User, IUser } from 'src/app/models/userModel';
import { RestApiService } from 'src/app/Services/restApi.service';
import { env } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private userService: UserService, private restApiService: RestApiService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getAccess();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AvoidAccessGuard implements CanActivate {

  constructor(private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.userService.avoidAccess();
  }
}

