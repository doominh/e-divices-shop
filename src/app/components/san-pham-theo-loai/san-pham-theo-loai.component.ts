import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ISanpham } from '../../models/isanpham';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-san-pham-theo-loai',
  templateUrl: './san-pham-theo-loai.component.html',
  styleUrl: './san-pham-theo-loai.component.css'
})
export class SanPhamTheoLoaiComponent {
  listSanPham: ISanpham[] = [];
  tenLoai: string = "";
  idLoai: number = 0;
  pageNum: number = 1;
  pageSize: number = 3;
  total: number = 0;
  constructor(private d: DulieuService, private route: ActivatedRoute, private cartService: CartService) { }
  ngOnInit(): void {
    this.idLoai = Number(this.route.snapshot.params['id']);
    this.d.getTenLoaiSanPham(this.idLoai).subscribe(
      loai => {
        this.tenLoai = loai[0].tenLoai;
      });
    this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum).subscribe(
      res => {
        this.listSanPham = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      });
  }
  chuyenDenTrang(p: number) {
    this.pageNum = p;
    this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum).subscribe(
      res => {
      this.listSanPham = res.body;
      this.total = Number(res.headers.get('X-Total-Count'));
    });
  }
  addToCart(product: ISanpham) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems());
  }
}
