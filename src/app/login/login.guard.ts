import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private loginService:LoginService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.isLoggedIn()) {
            return true; // Kullanıcı giriş yapmışsa sayfaya erişim izni ver
        }
    
        this.router.navigate(["login"]);
        return false; // Kullanıcı giriş yapmamışsa sayfaya erişim izni verme
    }
}