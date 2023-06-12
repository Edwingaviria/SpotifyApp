import { authUser } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerUser: authUser = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(registerUser: authUser) {
    this.authService.register(registerUser.email, registerUser.password)
  }

}
