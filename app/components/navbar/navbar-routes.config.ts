import { RouteInfo } from './navbar.metadata';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const SECTIONS: RouteInfo[] = [
  { path: '/', fragment: 'services', title: 'Services'},
  { path: '/', fragment: 'careworkers', title: 'Care Workers' },
  { path: '/', fragment: 'pricing', title: 'Pricing' }
];

export const ROUTES: RouteInfo[] = [
  { path: 'contact', fragment: '', title: 'Contact' },
  { path: 'about', fragment: '', title: 'About Us' }
];

export const LOGGED_IN_ROUTES: RouteInfo[] = [
  { path: 'dashboard', fragment: '', title: 'Dashboard'}
];


import { HomeComponent } from '../home/home.component';
// import { ServicesComponent } from '../services/services.component';
// import { WorkerComponent } from '../worker/worker.component';
import { AboutComponent } from '../about/about.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NewBookingComponent } from '../newBooking/newBooking.component';
import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'dashboard',  component: DashboardComponent },
    // { path: 'workers', component: WorkerComponent},
    // { path: 'services', component: ServicesComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'newBooking',  component: NewBookingComponent },
    { path: 'about',  component: AboutComponent},
    { path: 'contact', component: ContactComponent}
];

export const NavbarRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
