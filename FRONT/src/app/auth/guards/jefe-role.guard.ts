import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const jefeRoleGuard: CanActivateFn = (route, state) => {
   const authService: AuthService = inject(AuthService);
    const $authService = authService.verifyToken();
    const router: Router = inject(Router)
  
    
      if (typeof window !== 'undefined' && localStorage) {
        const tokenValue = localStorage.getItem('token');
        const roleValue = localStorage.getItem('role');
  
        
        if (tokenValue && roleValue === 'jefe' ||'conductor' || 'encargado' ||'operador') {
          return true; // Usuario autenticado
        }
      }
    
      //define a donde sera redirigido  
      router.navigate(['/login']);
      return false;
};
