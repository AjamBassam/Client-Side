import { LocationService } from './Services/location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './controllers/material.module';
import { AppRoutingModule, routingComponents } from "./controllers/app-routing.module";

import { RestApiService } from "./Services/restApi.service";
import { WebsocketService } from "./services/websocket.service";
import { UserService } from "./Services/user.service";
import { VehicleService } from "./Services/vehicle.service";

import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { VehicleCardComponent } from './sections/vehicle-card/vehicle-card.component';
import { SearchVehiclesComponent } from './sections/search-vehicles/search-vehicles.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserResolve } from './controllers/resolvers/user.resolve';
import { VehicleRentalsResolve } from './controllers/resolvers/vehicleRentals.resolve';
import { VehicleResolve } from './controllers/resolvers/vehicle.resolve';
import { AvoidAccessGuard, AccessGuard } from "./controllers/guards/access.guard";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    VehicleCardComponent,
    SearchVehiclesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBVpUD1_ReqVZ-lkUq-Nv7gNtShEF5Oraw',
      libraries: ['places']
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    WebsocketService, RestApiService, UserService, VehicleService, LocationService,
    UserResolve, VehicleRentalsResolve, VehicleResolve,
    AccessGuard, AvoidAccessGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
