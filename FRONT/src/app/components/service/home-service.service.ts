import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


 private http: HttpClient = inject(HttpClient)

 // servicios genrales
 getOrders() {
  return this.http.get('http://localhost:3000/order')
 }



// servcios del encargado
 updateEvent(id: string, editUpdate: any) {
  return this.http.put(`http://localhost:3000/order/${id}`, editUpdate);
}


//oservicio de tiendas
getWarehouse(){
  return this.http.get('http://localhost:3000/warehouse')
 }

 addNewWarehouse(newOne:any){
  return this.http.post('http://localhost:3000/warehouse',newOne)
 }

 deleteWarehouse(id:string){
  return this.http.delete('http://localhost:3000/warehouse/'+ id)
  }


 //servicio de trabajadores

 getWorkers(){
  return this.http.get('http://localhost:3000/worker')
 }
 addworkers(newWorker:any ){
  return this.http.post('http://localhost:3000/worker', newWorker)
 }

}
