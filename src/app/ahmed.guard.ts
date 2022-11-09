import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DetailserviceService } from './service/detailservice.service';

@Injectable({
  providedIn: 'root',
})
export class AhmedGuard implements CanActivate {
  constructor(public service: DetailserviceService, public route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.service.auth == true) {
      return true;
    } else {
      alert('bro no cheating plz login');
      this.route.navigate(['/']);
    }
    return true ? this.service.auth : false;
  }
}
