import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrl: './thanh-toan.component.css'
})
export class ThanhToanComponent {
  constructor(private cartservice: CartService) { }
  hoten: string = "";
  email: string = "";
  diachi: string = "";
  dienthoai: string = "";
  taodonhang() {
    this.cartservice.taoDonHang(this.hoten, this.diachi, this.dienthoai, this.email).subscribe(
      response => {
        console.log(response);
        console.log(response.body);
        console.log(response.ok);

        // Thiết lập lại giá trị của các biến về rỗng
        this.hoten = '';
        this.diachi = '';
        this.dienthoai = '';
        this.email = '';

        // Hiển thị thông báo thành công
        window.alert('Tạo đơn hàng thành công');
        //lấy id của đơn hàng mới + lưu các sản phẩm trong cart lên server
        if (response.ok == false) {
          alert(response.statusText); //hiện lỗi
        } else {
          let body: any = response.body; 
          let idDH: number = Number(body.id);
          this.cartservice.items.forEach(
            item => this.cartservice.luuChiTietDonhang(idDH, item).subscribe(res => console.log(res))
          )
        }//else
        location.href = "/";
      }
    );
  }
}
