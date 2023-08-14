import { CanActivateFn } from '@angular/router';
import { ɵɵinject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const auth1Guard: CanActivateFn = (route, state) => {


  // Use dependency injection to get an instance of the AuthService
  const authService =  ɵɵinject(AuthService);

  // Check if the user is logged in using the AuthService
  if (authService.isLoggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};
