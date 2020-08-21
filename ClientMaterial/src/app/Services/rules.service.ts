import { Injectable } from '@angular/core';
import { RestApiService } from './restApi.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/userModel';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(
    private restApiService: RestApiService,
    private userService: UserService,
    private router: Router,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  public getAccess(): Observable<boolean> {
    return this.restApiService.post_getUser({}).pipe(
      map(data => {
        if (data._id !== undefined) {
          this.userService.setUser(data);
          console.log(User);
          return true;
        } else {
          alert("login first");
          this.activeModal.close();
          this.modalService.open(LoginComponent, {
            centered: true,
          });
          return false;
        }
      }),
      catchError(error => {
        return of(false);
      }));
  }

  public avoidAccess(): Observable<boolean> {
    return this.restApiService.post_getUser({}).pipe(
      map(data => {
        return data._id === undefined;
      }),
      catchError(error => {
        return of(false);
      }));
  }

}
