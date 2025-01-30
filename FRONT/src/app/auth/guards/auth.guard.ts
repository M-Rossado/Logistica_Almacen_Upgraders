import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window === 'undefined') {
    return router.createUrlTree(['/login']); 
  }

  const tokenValue = localStorage.getItem('token');
  const roleValue = localStorage.getItem('role');

  
  const allowedRoles = ["camionero", "operario", "encargado", "jefe"];

  if (tokenValue && roleValue && allowedRoles.includes(roleValue)) {
    return true; 
  }

  return router.createUrlTree(['/login']); 
};