import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:3500/order';

  constructor(private http: HttpClient) { }
  
    // Método para agregar un nuevo pedido
    addOrder(order: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/neworder`, order);  // Usa baseUrl
    }

    // Método para obtener los pedidos de un operario por su email
  getOrdersByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchbyemail`, {
      params: { email } // Enviamos el email como parámetro de consulta
    });
  }

      // Método para obtener un pedido por su ID
    getOrderById(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);  // Modificado para obtener un pedido por ID
    }

    // Método para actualizar un pedido
  updateOrder(order: any) {
    return this.http.put(`/api/orders/${order.id_order}`, order);
  }
}