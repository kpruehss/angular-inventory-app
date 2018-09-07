import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  /*
  * @input productList - the Product[] passed in from app component
  */
  @Input()
  productList: Product[];

  /*
  * @output ProductSelected - outputs teh current product whenever a new Product
  * is selected
  */
  @Output()
  ProductSelected: EventEmitter<Product>;

  /*
  * currentProduct holds local state of currently selected 'Product'
  */
  private currentProduct: Product;

  constructor() {
    this.ProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.ProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {}
}
