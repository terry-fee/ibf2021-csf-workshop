import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() products: any = [];
  @Output() onAddProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(name: string) {
    this.onAddProduct.next(name);
  }

}
