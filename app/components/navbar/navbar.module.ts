import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ NavbarComponent, HomeComponent, FooterComponent, AboutComponent ],
  exports: [ NavbarComponent ]
})
export class NavbarModule {}
