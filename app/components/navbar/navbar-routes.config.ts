import { MenuType, RouteInfo } from './navbar.metadata';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: RouteInfo[] = [
  { path: 'services', title: 'Services', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];

export const LOGGED_IN_ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT }
];


import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NewBookingComponent } from '../newBooking/newBooking.component';
import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'newBooking',  component: NewBookingComponent },
    { path: 'about',  component: AboutComponent},
    { path: 'contact', component: ContactComponent}
];

export const NavbarRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
