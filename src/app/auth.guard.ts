import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { UserDetailsService } from './service/user-details.service';
import { UserlistService } from './service/userlist.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userDetailsService:UserDetailsService, private router:Router,private toast: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userDetailsService.LoggedinbyUser())
      return true; 
      else
      {
        this.toast.error("Please login,First.")
        this.router.navigate(["login"])
        return false;
      }
  }
}
