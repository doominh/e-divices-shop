import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { IDonHang } from '../../models/idon-hang';
import { IDonHangChiTiet } from '../../models/idon-hang-chi-tiet';

@Component({
  selector: 'app-lich-su-dh',
  templateUrl: './lich-su-dh.component.html',
  styleUrl: './lich-su-dh.component.css'
})
export class LichSuDhComponent {
  orders: IDonHang[] = [];
  orderDetails: IDonHangChiTiet[] = [];
constructor(private cartservice: CartService) {}
ngOnInit(): void {
  this.cartservice.getTatCaDH().subscribe( d => this.orders = d);
  this.cartservice.getTatCaDHCT().subscribe( d => this.orderDetails = d);
}
getOrderDetails(orderId: number): IDonHangChiTiet[] {
  return this.orderDetails.filter(item => item.iddh === orderId);
}
selectedOrder: IDonHang | null = null;
showOrderDetails(order: IDonHang) {
  this.selectedOrder = order;
}
}
