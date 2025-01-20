import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
//Llenar el array product-List con una llamada al backend
private productService: ProductService = inject(ProductService);
public productList: any = [];

ngOnInit() {
this.getAllProducts()
  // this.productService.orderToUpdate.subscribe((condition) => {
  //   if(condition) {
  //     //Aqui vamos a actualizar la lista de productos
  //     this.getAllProducts()
  //   }
  // })
}


getAllProducts() {
  return this.productService.getAllProducts().subscribe((data) => {
    this.productList = data
  })
}


}
