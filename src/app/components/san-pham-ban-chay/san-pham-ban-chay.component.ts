import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ISanpham } from '../../models/isanpham';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-san-pham-ban-chay',
  templateUrl: './san-pham-ban-chay.component.html',
  styleUrl: './san-pham-ban-chay.component.css'
})
export class SanPhamBanChayComponent {
  constructor( private d: DulieuService, private cartService : CartService) {}
  listSanPham: ISanpham[] = [];
  addToCart(product: ISanpham) {
    this.cartService.addToCart(product);
  }
  ngOnInit(): void {
    this.d.getLaptopBanChay().subscribe(d => this.listSanPham = d)
  }
}
