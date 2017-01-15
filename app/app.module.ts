import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// import { Routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([])],
  declarations: [ AppComponent, HomeComponent, AboutComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
