import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { AgregarTrabajadorComponent } from './modules/agregar-trabajador/agregar-trabajador.component';


import { AgregarcamionComponent } from './modules/agregarcamion/agregarcamion.component';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [AgregarTrabajadorComponent,AgregarcamionComponent ],
  templateUrl: './jefe.component.html',
  styleUrl: './jefe.component.css'
})
export class JefeComponent {


private homeservice: HomeServiceService = inject(HomeServiceService)
public pedidosList: any = []
public Showmodal:boolean = false;// paso #2
public modalN2: boolean = false;




ngOnInit(){
  this.getPedidos()
}


getPedidos(){
  this.homeservice.getPedidos().subscribe((data) =>
  this.pedidosList = data
)

  console.log(this.getPedidos)
}
//PASO A PASO FORMA TRADICIONAL
//paso 1 creamos el evento con el cual vamos a abrir la ventana modal-- anteriormente creamos los respectimos modales y sus componentes dentro de la carpeta como hijos
//paso 2: creamos una constante publica en donde enviaremos el valor de falso lo llamaremos (Showmodal = false)
//paso 3: dentro de la funcion de abrir el modal le damos el valor de verdadero a nuestro booleano del paso 2
//paso 4: dentro del html que quremos mostrar invocamos nuestra ventana modal ...
// hasta aqui ya deberia abrirnos la ventana modal seleccionada...abstrac
// paso 6: nos vamos al componente .ts desde donde vamos a emitir un output..(en este caso es agregar trabajadores.ts)
// psao 7: creamos un evento para cerrar nuestra ventan modal (closeUsuario)
// paso 8: para genrar la comunicacion entre madre he hijo debemos poner en nuestro html el dato ejempo ( <app-agregar-trabajador (closeModal)="closeUsuario()"></app-agregar-trabajador>) donde
//(closeModal) es el evento emisor que creamos en el hijo  y closeUsuario() es el evento que lo va a recibir, en el momento de agregarlo este les mostrara y los ayudara a definirlo

openUsuario(){//paso#1
this.Showmodal = true
console.log(this.Showmodal)
}

closeUsuario(){
this.Showmodal = false
}

// modal 2

modal2(){
this.modalN2 = true
console.log(this.modalN2)
}

cerrarmodal2(){
  this.modalN2 = false
}

}

