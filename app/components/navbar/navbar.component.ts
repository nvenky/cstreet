import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';
import { Auth } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router }from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    providers: [ Auth ],
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public menuItems: any[];
    public brandMenu: any;
    public currentUser: User;
    isCollapsed = false;

    constructor(private auth: Auth, private router: Router) {
        this.auth.currentUserObservable.subscribe((user: User) => {
          this.currentUser = user;
          if (this.currentUser !== null && !this.currentUser.registrationComplete && router.url !== '/signup') {
            router.navigate(['/signup'], { skipLocationChange: false });
          }
        });
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    public getMenuItemClasses(menuItem: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }
}
