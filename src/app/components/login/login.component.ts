import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { authUser } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user:string= ''
  loginUser: authUser = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(loginUser: authUser) {
    this.authService.login(loginUser.email, loginUser.password)
    
  }
}
