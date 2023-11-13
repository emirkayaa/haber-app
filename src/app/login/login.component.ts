import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = new User();
  constructor(private loginService : LoginService) { }
  ngOnInit(){}
  login(form:NgForm){
    this.loginService.login(this.user);
  }
  

}
