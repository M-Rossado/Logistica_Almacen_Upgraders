import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


 private http: HttpClient = inject(HttpClient)

 getPedidos() {
  return this.http.get('http://localhost:3000/pedidos')
 }
  
}
