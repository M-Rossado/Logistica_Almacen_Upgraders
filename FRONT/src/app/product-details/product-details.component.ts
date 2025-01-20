import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private productService: ProductService = inject(ProductService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public product: any = {};
  

  ngOnInit() {
    //Activated Route es un servicio propio de Angular, que nos permite acceder al id de la ruta activa. Y para acceder debemos suscribirnos de la siguiente manera
    this.activatedRoute.params.subscribe((query) => {
      //Una vez que nos suscribimos, en el territorio de la logica, accedemos al id y ejecutamos la llamada al servidor, donde nos traeremos
      //el producto que tiene dicho id
      this.productService.getProductById(query['id']).subscribe((data) => {
        this.product = data
      } )
    })
  }

}
