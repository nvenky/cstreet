import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Auth } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router }from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent {
    model = new User('', '', '', '', '', '', '', '', '', false);

    constructor(private auth: Auth, private userService: UserService, private router: Router) {
        auth.currentUserObservable.subscribe((user: User) => {
            if (user !== null) {
                this.model = user;
            }
        });
    }

    public updateUser() {
        this.model.registrationComplete = true;
        this.userService.update(this.model)
        .subscribe((updatedUser: User) => {
          this.auth.currentUserSubject.next(updatedUser);
          this.router.navigate(['/dashboard'], { skipLocationChange: false });
        },
          (err: any) => console.log(err),
          () => console.log('User Updated')
        );
    }
}
