import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsService } from './service/user-details.service';
import { UserlistService } from './service/userlist.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userDetailsService:UserDetailsService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userDetailsService.ThisUser.length==0)
      {
        alert("Please login,First.")
        this.router.navigate(["login"])
        return false;

      }
      else
      return true;
  }
}
