import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';
import { Auth } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    providers: [Auth, UserService],
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public menuItems: any[];
    public brandMenu: any;
    public currentUser: User;
    isCollapsed = false;

    constructor(private auth: Auth, private userService: UserService) {
        this.auth.userAuthorizedObservable.subscribe((authId: string) => {
            if (authId === null || authId === '') {
                this.currentUser = null;
            }
            console.log('user authorized ' + authId);
            userService.getUser(authId).subscribe(user => this.currentUser = user);
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
