import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService)
  private router: Router = inject(Router)
 
  public userLoginForm = {

    email: '',
    password: ''
  }


  handleLoginForm() {
     const userFormValues = Object.values(this.userLoginForm);

    if(userFormValues.includes('')){
       alert('Debes de rellenar todos los campos')
       return
     }

    // const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    // if (!emailRegex.test(this.userLoginForm.email)) {
    //   alert('Por favor ingresa un correo electrónico válido.');
    //   return;
    // }

    // if (this.userLoginForm.password.length < 8 || !/\d/.test(this.userLoginForm.password) || !/[A-Z]/.test(this.userLoginForm.password)) {
    //   alert('La contraseña debe tener al menos 8 caracteres, incluir un número y una letra mayúscula.');
    //   return;
    // }

     this.authService.login(this.userLoginForm).subscribe({
       next: (data: any) => {
         alert(data.msg)
         localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          localStorage.setItem('name',data.name);
          localStorage.setItem('lugar',data.lugar);
         this.router.navigate(['/home/home'])
       },
       error: (error) => {
         alert('usuario o conrasena no encontrados ');
       }
     });
   

  }
}
