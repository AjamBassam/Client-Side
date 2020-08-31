import { LocationService } from './Services/location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider } from 'angularx-social-login';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MaterialModule } from './controllers/material.module';
import { AppRoutingModule, routingComponents } from "./controllers/app-routing.module";

import { RestApiService } from "./Services/restApi.service";
import { WebsocketService } from "./services/websocket.service";
import { UserService } from "./Services/user.service";
import { VehicleService } from "./Services/vehicle.service";
import { RulesService } from "./Services/rules.service";

import { NavBarComponent } from './sections/nav-bar/nav-bar.component';
import { HeaderHomeComponent } from './sections/header-home/header-home.component';
import { FooterComponent } from './sections/footer/footer.component';
import { VehicleCardComponent } from './sections/vehicle-card/vehicle-card.component';
import { VehicleCardTwoComponent } from './sections/vehicle-card-two/vehicle-card-two.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserResolve } from './controllers/resolvers/user.resolve';
import { VehicleRentalsResolve } from './controllers/resolvers/vehicleRentals.resolve';
import { VehicleResolve } from './controllers/resolvers/vehicle.resolve';
import { AvoidAccessGuard, AccessGuard } from "./controllers/guards/access.guard";



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    HeaderHomeComponent,
    FooterComponent,
    VehicleCardComponent,
    RegisterComponent,
    LoginComponent,
    VehicleCardTwoComponent
  ],
  entryComponents: [
    RegisterComponent
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
    }),
    SocialLoginModule
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    WebsocketService, RestApiService, UserService, VehicleService, LocationService, RulesService,
    UserResolve, VehicleRentalsResolve, VehicleResolve,
    AccessGuard, AvoidAccessGuard,
    NgbActiveModal,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '242345312971-1gu3tmpfo0v12fs17adef2fbstv1chf9.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
