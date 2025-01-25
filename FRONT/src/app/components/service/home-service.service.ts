import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


 private http: HttpClient = inject(HttpClient)

 getPedidos() {
  return this.http.get('http://localhost:3000/order')
 }


 updateEvent(id: string, editUpdate: any) {
  return this.http.put(`http://localhost:3000/order/${id}`, editUpdate);
}

  
}
