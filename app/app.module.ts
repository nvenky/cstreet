import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarRoutes } from './components/navbar/navbar-routes.config';

// import { Routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, NavbarRoutes],
  declarations: [ AppComponent, HomeComponent, AboutComponent, NavbarComponent,
                  FooterComponent, ServicesComponent, SignupComponent ],
  providers:    [ AUTH_PROVIDERS ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
