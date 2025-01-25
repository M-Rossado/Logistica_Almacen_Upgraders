// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Para hacer peticiones HTTP
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders';  // La URL de tu base de datos simulada

  constructor(private http: HttpClient) {}

  // Obtener un pedido por su ID
  getOrderById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);  // Construir la URL de la API para obtener el pedido
  }

  // Actualizar un pedido
  updateOrder(order: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${order.id}`, order);  // URL para actualizar el pedido
  }
}