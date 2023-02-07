import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserDetailsService } from './service/user-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSellerGuard implements CanActivate {
  constructor(private UserDetailsService: UserDetailsService, private toast: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.UserDetailsService.currentUserDetails().seller==true)
    return true;
    else{
      this.toast.info("This sevice applicable only for seller","error")
      return false
    }
    
  }
  
  
}
