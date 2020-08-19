import { HomeContentComponent } from './../home-content/home-content.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { VehicleRentalsComponent } from "../vehicle-rentals/vehicle-rentals.component";
import { VehicleComponent } from "../vehicle/vehicle.component";
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ListYourVehicleComponent } from '../list-your-vehicle/list-your-vehicle.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { AccountComponent } from '../account/account.component';
import { VehicleRentalsResolve } from './resolvers/vehicleRentals.resolve';
import { UserResolve } from "./resolvers/user.resolve";
import { VehicleResolve } from './resolvers/vehicle.resolve';
import { env } from "../../environments/environment";
import { AvoidAccessGuard, AccessGuard } from './guards/access.guard';

const routes: Routes = [

  { path: "", redirectTo: "/", pathMatch: "full" },
  {
    path: "", component: HomeComponent,
    resolve: { user: UserResolve }
  },
  {
    path: env.REGISTER.en,
    component: RegisterComponent,
    canActivate: [AvoidAccessGuard],
  },
  {
    path: env.LOGIN.en,
    component: LoginComponent,
    canActivate: [AvoidAccessGuard],
  },
  {
    path: env.LIST_YOUR_VEHICLE.en,
    component: ListYourVehicleComponent,
    canActivate: [AccessGuard],
  },


  {
    path: `${env.VEHICLE_RENTALS.en}/:${env.LAT}/:${env.LNG}/:${env.START_DATE}/:${env.END_DATE}`,
    component: VehicleRentalsComponent,
    resolve: { user: UserResolve, vehicleList: VehicleRentalsResolve }
  },
  {
    path: `${env.VEHICLE.en}/:${env.ID}`,
    component: VehicleComponent,
    resolve: { user: UserResolve, vehicle: VehicleResolve }
  },


  {
    path: env.FAVORITES.en,
    component: FavoriteComponent,
    canActivate: [AccessGuard],
  },
  {
    path: env.USER_PROFILE.en,
    component: UserProfileComponent,
    canActivate: [AccessGuard],
  },
  {
    path: env.ACCOUNT.en,
    component: AccountComponent,
    canActivate: [AccessGuard],
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  HomeContentComponent,
  RegisterComponent,
  LoginComponent,
  ListYourVehicleComponent,
  VehicleRentalsComponent,
  VehicleComponent,
  UserProfileComponent,
  FavoriteComponent,
  AccountComponent,
  PageNotFoundComponent,
];
