import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-classic-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './classic-form.component.html',
  styleUrl: './classic-form.component.css'
})
export class ClassicFormComponent {

  private productService: ProductService = inject(ProductService)
  public productForm = {
        "name": "",
        "description": "",
        "price": 0,
        "category": "",
        "brand": "",
        "quantity": 0,
        "imageUrl": "https://via.placeholder.com/150?text=Nombre+Producto"
  }

  handleForm() {
    const productFormValues = Object.values(this.productForm);
    if(productFormValues.includes('')) {
      alert('Faltan atributos por llenar')
      return
    }

  this.productService.postProduct(this.productForm).subscribe((data) => {
    //Esto se ejecuta cuando la peticion http ha sido exitosa
    // this.productService.orderToUpdate.emit(true);

      this.productForm.name = '';
      this.productForm.description = ''
      this.productForm.price = 0;
      this.productForm.category = ''
      this.productForm.quantity = 0;
  }, (error) => {
    //Cuando hay un error se ejecuta esta parte de la logica
  })

  }

}
