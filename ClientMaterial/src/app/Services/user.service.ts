import { RestApiService } from './restApi.service';
import { Injectable } from '@angular/core';
import { User, IUser } from '../models/userModel';
import { env } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restApiService: RestApiService, private router: Router) { }

  public setUser(user: IUser): void {
    User._id = user._id;
    User.firstName = user.firstName;
    User.lastName = user.lastName;
    User.email = user.email;
    User.password = user.password;
    User.favorites = user.favorites;
    User.connected = this.isConnected();
    console.log(User);
  }

  public isConnected(): boolean {
    return (User._id) ? true : false;
  }

  public getUser(): Observable<IUser> {
    return this.restApiService.post_getUser({})
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(error => {
          return Observable.throw(new Error("something wrong"));
        }));
  }


  public getAccess(): Observable<boolean> {
    return this.restApiService.post_getUser({}).pipe(
      map(data => {
        if (data._id !== undefined) {
          this.setUser(data);
          console.log(User);
          return true;
        } else {
          alert("login first");
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


  public register(user: IUser): void {
    this.restApiService.post_register(user)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["/login"]);
        },
        err => {
          console.log(err.error.msg);
        }
      );
  }

  public login(user: IUser): void {
    this.restApiService.post_login(user)
      .subscribe(
        () => {
          document.location.href = env.CLIENT_URL;
        },
        err => {
          console.log(err.error.msg);
        }
      );
  }

  public logout(): void {
    this.restApiService.post_logout({})
      .subscribe(
        () => {
          document.location.href = env.CLIENT_URL;
        },
        err => {
          console.log(err);
        }
      );
  }

  public deleteAccount(): void {
    this.restApiService.post_delete({ ownerId: User._id })
      .subscribe(
        data => {
          console.log(data);
          document.location.href = env.CLIENT_URL;
        },
        err => {
          console.log(err);
        });
  }







  // public async fetchUser(): Promise<any> {
  //   return await this.restApiService.promisePost("/", {})
  //     .then(async (data: IUser) => {
  //       if (data._id) {
  //         this.setUser(data);
  //       }
  //       else {
  //         console.log(data.msg);
  //         throw new Error("You need to login first");
  //       }
  //     }).catch(err => {
  //       console.log(err);
  //       // this.router.navigate(["/"]);
  //       // alert("LOGIN POPUP");
  //     });
  // }

  // public fetchhUser(): void {
  //   this.restApiService.post("/", {})
  //     .subscribe(
  //       (data: IUser) => { this.setUser(data); },
  //       (err: any) => { console.log(err); }
  //     );
  // }
}
