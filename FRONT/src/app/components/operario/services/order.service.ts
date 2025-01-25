import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/order'; // URL de tu API

  constructor(private http: HttpClient) { }

    // Método para agregar un nuevo pedido
    addOrder(order: any): Observable<any> {
      return this.http.post(this.apiUrl, order);
    }
}
