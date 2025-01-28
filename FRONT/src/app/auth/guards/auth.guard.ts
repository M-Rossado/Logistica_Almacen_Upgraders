import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { catchError, map, of } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const $authService = authService.verifyToken();
  const router: Router = inject(Router)

  
    if (typeof window !== 'undefined' && localStorage) {
      const tokenValue = localStorage.getItem('token');
      const roleValue = localStorage.getItem('role');

      
      if (tokenValue && roleValue === 'jefe') {
        return true; // Usuario autenticado
      }
    }
  
    // Redirigir al usuario al login si no está autenticado
    router.navigate(['/home']);
    return false;
  };