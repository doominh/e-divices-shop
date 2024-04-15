import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { ICart } from '../../models/icart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();
  tongTien() {
    let tt: number = 0;
    this.items.forEach( item => tt += item.soluong*item.giasp)
    return tt;
  }
  tongSoLuong() {
    let tsl: number = 0;
    this.items.forEach( item => tsl += item.soluong);
    return tsl;
  }
  xoaToanBo() {
    return this.items = this.cartService.clearCart();
  }
  xoaSp(sp: ICart) {
    return this.cartService.deleteItem(sp);
  }
  del0(sp: ICart){
    if (sp.soluong <=0) return this.cartService.deleteItem(sp);
  }
}
