import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
private productService: ProductService = inject(ProductService)
public eventList: any = []
ngOnInit() {
  this.productService.getEventsList().subscribe((events) => {
      this.eventList = events
  })
}

}
