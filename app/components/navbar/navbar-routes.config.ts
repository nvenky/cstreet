import { MenuType, RouteInfo } from './navbar.metadata';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Caring Street', menuType: MenuType.BRAND },
  { path: 'services', title: 'Services', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { SignupComponent } from '../signup/signup.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'services', component: ServicesComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'about',  component: AboutComponent},
    { path: 'contact', component: AboutComponent}
];

export const NavbarRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
