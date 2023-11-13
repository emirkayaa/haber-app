import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private toastr:ToastrService,private router : Router) { }
  ngOnInit(){
   
  }
  logged:boolean = false;
  login(user: User): boolean {
    if (user.username == "admin" && user.password == "12345") {
      this.toastr.success("Giriş Başarılı");
      this.logged = true; // Doğru olan satır
      localStorage.setItem("isLogged", user.username);
      this.router.navigate(["haber-add"]);
      return true;
    } else {
      this.toastr.error("Hatalı Giriş, Bilgilerinizi Kontrol Ediniz");
      return false;
    }
  }
  isLoggedIn(){
    return this.logged;
  }

  logOut(){
    localStorage.removeItem("isLogged"); 
  }
}
