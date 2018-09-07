import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  product: Product[];

  constructor() {
    this.product = [
      new Product(
        'BLACKCAP',
        'A Black Baseball Cap',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99,
      ),
      new Product(
        'BLACKSHOE',
        'Nike Sneakers - Black',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Footwear', 'Sneakers'],
        249.95,
      ),
      new Product(
        'BLUEJACKET',
        'A Blue Windbreaker',
        '/assets/images/products/blue-jacket.jpg',
        ['Men', 'Apparel', 'Jackets & Vests'],
        89.95,
      ),
    ];
  }
}
