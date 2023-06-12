import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  username!: string | null;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService) {
    this.getUsername();
  }

  getUsername() {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.username = user.email;
      } else {
        this.username = 'Usuario invitado';
      }
    });
  }
  logout() {
    this.authService.logout()
  }
}
