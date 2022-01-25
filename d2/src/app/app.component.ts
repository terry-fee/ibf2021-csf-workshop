import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Shopping Cart";
  carts: any = [];
  catalog = [
    { name: "apple", type: "fruit" },
    { name: "orange", type: "fruit"},
    { name: "pear", type: "fruit"},
    { name: "durian", type: "fruit"},
    { name: "grape", type: "fruit"}
  ];
  cartsMap: Map<string, number>
    = new Map<string, number>();

  addToCart($e: any) {

    if (!this.cartsMap.has($e)) {
      this.cartsMap.set($e, 1);
      this.carts.push({name: $e, type: "", count: 1});
    } else {
      let count = this.cartsMap.get($e);
      this.cartsMap.set($e, count! + 1);
      let indexItem = this.carts.findIndex(
        (i: { name: any; }) => i.name === $e);
      this.carts[indexItem].count = count! + 1;
    }
  }

  removeFromCart(name: string) {
    let indexItem = this.carts.findIndex(
      (i: { name: string; }) => i.name === name);

    if (indexItem > -1) {
      this.carts.splice(indexItem, 1);
      this.cartsMap.delete(name);
    }
  }

}
