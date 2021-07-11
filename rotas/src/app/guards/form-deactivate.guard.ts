import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IFormDeactivate } from './iform-deactivate';

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard implements CanDeactivate<IFormDeactivate> {
  canDeactivate(
    component: IFormDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
      return component.podeDesativar();
  }
  
}
