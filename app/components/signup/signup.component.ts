import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Auth } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent {
    model = new User('', '', '', '', '', '', '', '', '', false);

    constructor(auth: Auth) {
        auth.currentUserObservable.subscribe((user: User) => {
            if (user !== null) {
                this.model = user;
            }
        });
    }

    signup(event: any) {
        event.preventDefault();
        console.log('Form Data: ');
        console.log(this.model);
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
