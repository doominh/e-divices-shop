import { Injectable } from '@angular/core';
import { ISanpham } from './models/isanpham';
import { ICart } from './models/icart';
import { HttpClient } from '@angular/common/http';
import { IDonHang } from './models/idon-hang';
import { IDonHangChiTiet } from './models/idon-hang-chi-tiet';
@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private h: HttpClient) { }
  items: ICart[] = [];
  addToCart(sp: ISanpham) {
    var index = this.items.findIndex(item => item.idsp == sp.id)
    if (index >= 0) {
      this.items[index].soluong++;
    } else {
      var c: ICart;
      c = {
        idsp: sp.id,
        tensp: sp.tensp,
        giasp: sp.giasp,
        hinh: sp.hinh,
        soluong: 1
      }
      this.items.push(c);
    }
  }
  getItems() { return this.items; }
  clearCart() { return this.items = []; }
  deleteItem(sp: ICart) {
    var index = this.items.findIndex(item => item.idsp == sp.idsp)
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  taoDonHang(hoten: string, diachi: string, dienthoai: string, email: string) {
    return this.h.post("http://localhost:3000/donhang",
      { hoten: hoten, diachi: diachi, dienthoai: dienthoai, email: email },
      { observe: 'response' }
    )
  }
  luuChiTietDonhang(idDH:number, item:ICart){
    return this.h.post<any>("http://localhost:3000/donhangchitiet",
    {"iddh":idDH,"idsp":item.idsp,"tensp":item.tensp,"giasp":item.giasp,"soluong":item.soluong},
      { observe: 'response' }
    )
    } 
    getTatCaDH() {
      var url = `http://localhost:3000/donhang`;
      return this.h.get<IDonHang[]>(url);
    }
    getTatCaDHCT() {
      var url = `http://localhost:3000/donhangchitiet`;
      return this.h.get<IDonHangChiTiet[]>(url);
    }
}
