import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Asegurar que FormsModule esté aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrección: era styleUrls, no styleUrl
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public userLoginForm = {
    email: '',
    password: ''
  };

  handleLoginForm() {
    console.log('Formulario enviado:', this.userLoginForm);
    const userFormValues = Object.values(this.userLoginForm);

    if (userFormValues.includes('')) {
      alert('Debes rellenar todos los campos');
      return;
    }

    this.authService.login(this.userLoginForm).subscribe({
      next: (data: any) => {
        alert(data.msg);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('warehouse_location', data.warehouse_location);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Usuario o contraseña no encontrados');
      }
    });
  }
}