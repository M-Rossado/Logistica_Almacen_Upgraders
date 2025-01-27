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

      // Método para obtener un pedido por su ID
    getOrderById(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}`);
    }


    // Método para actualizar un pedido
    updateOrder(order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.id}`, order);
  }
}
