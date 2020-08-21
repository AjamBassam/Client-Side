import { RulesService } from './../../Services/rules.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private rulesService: RulesService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.rulesService.getAccess();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AvoidAccessGuard implements CanActivate {

  constructor(private rulesService: RulesService) { }

  canActivate(): Observable<boolean> {
    return this.rulesService.avoidAccess();
  }
}

