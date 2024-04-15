import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ISanpham } from '../../models/isanpham';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-san-pham-moi',
  templateUrl: './san-pham-moi.component.html',
  styleUrl: './san-pham-moi.component.css'
})
export class SanPhamMoiComponent {
  constructor(private d: DulieuService, private cartService : CartService) {}
  listSanPham: ISanpham[] = [];
  addToCart(product: ISanpham) {
    this.cartService.addToCart(product);
  }
  ngOnInit() {
    this.d.getDienThoaiMoi().subscribe( d => this.listSanPham = d);
  }
}
