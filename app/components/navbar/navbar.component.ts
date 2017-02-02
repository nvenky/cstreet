import { Component, OnInit } from '@angular/core';
import { ROUTES, LOGGED_IN_ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';
import { Auth } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    providers: [Auth],
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public menuItems: any[];
    public brandMenuLink: any;
    public currentUser: User;
    isCollapsed = false;

    constructor(private auth: Auth, private router: Router) {
        this.auth.currentUserObservable.subscribe((user: User) => {
            this.currentUser = user;
            if (this.currentUser !== null && this.currentUser.authId !== null) {
                if (this.currentUser.registrationComplete) {
                    this.brandMenuLink = '/dashboard';
                    this.menuItems = LOGGED_IN_ROUTES;
                } else {
                    this.brandMenuLink = '/signup';
                    this.menuItems = [];
                }
            } else {
                this.menuItems = ROUTES;
                this.brandMenuLink = '';
            }
            if (this.currentUser !== null && !this.currentUser.registrationComplete && router.url !== '/signup') {
                router.navigate(['/signup'], { skipLocationChange: false });
            }
        });

        this.auth.authenticationObservable.subscribe((action: string) => {
            if (action === 'logout') {
                this.currentUser = null;
                router.navigate(['/'], { skipLocationChange: false });
            } else if (action === 'login') {
                if (this.currentUser !== null && this.currentUser.registrationComplete) {
                    router.navigate(['/dashboard'], { skipLocationChange: false });
                }
            }
        });
    }

    ngOnInit() {
        this.menuItems = ROUTES;
        this.brandMenuLink = '';
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
