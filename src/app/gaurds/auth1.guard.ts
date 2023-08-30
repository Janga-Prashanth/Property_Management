import { CanActivateFn } from '@angular/router';
import { ɵɵinject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanDeactivateFn } from '@angular/router';

export const auth1Guard: CanActivateFn = (route, state) => {


  // Use dependency injection to get an instance of the AuthService
  const authService = ɵɵinject(AuthService);

  // Check if the user is logged in using the AuthService
  if (authService.isLoggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
}

export const auth2Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
