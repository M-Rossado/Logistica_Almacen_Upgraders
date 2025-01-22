import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { catchError, map, of } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const $authService = authService.verifyToken();
  const router: Router = inject(Router)

  return $authService.pipe(
    map((data) => {
     return data.verified
    }),
    catchError((err) => {
      if(err.error.message === 'Token expired') {
          alert('Tienes el token expirado, debes volver a iniciar sesión para renovarlo')
      }

      router.navigate(['auth/login'])
      return of(false)
    })
  )
 
};