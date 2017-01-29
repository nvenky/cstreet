import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login.template.html'
})
export class LoginComponent {
  constructor(private auth: Auth) {}
}
