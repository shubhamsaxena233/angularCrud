import { Component } from '@angular/core';
import { Product } from '../app/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public products: Product[] = [];
  public price: number;
  public name: string;
  public indexToUpdate:number;
  public edit:boolean=false;


  addProduct() {
    let p: Product = new Product;
    p.id = this.price;
    p.name = this.name;

    if (!this.edit) {
      this.products.push(p);
    } else {
      this.products[this.indexToUpdate] = p;
    }

    this.price = null;
    this.name = '';
    this.edit=false;

  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  editProduct(index: number) {
    this.name = this.products[index].name;
    this.price = this.products[index].id;
    this.edit=true;
    this.indexToUpdate=index;
  }

}
