import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: any;
  constructor() {}
  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Computer', price: 30000, selected: true },
      { id: 2, name: 'Printer', price: 20000, selected: false },
      { id: 3, name: 'Iphone', price: 10000, selected: true },
    ];
  }

  protected handleDelete(product: any) {
      let v = confirm("Are you sure ?");
      if (v) {
        this.products = this.products.filter((p: { id: any }) => p.id != product.id);
      }
  }
}
