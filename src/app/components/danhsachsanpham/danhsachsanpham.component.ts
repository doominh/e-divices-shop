import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DulieuService } from '../../dulieu.service';
import { ISanpham } from '../../models/isanpham';
import { CartService } from '../../cart.service';
import { ILoaisp } from '../../models/iloaisp';
import { __values } from 'tslib';
@Component({
  selector: 'app-danhsachsanpham',
  templateUrl: './danhsachsanpham.component.html',
  styleUrl: './danhsachsanpham.component.css'
})
export class DanhsachsanphamComponent {
  isReset: boolean = false
  constructor(private http: HttpClient, private d: DulieuService, private cartService: CartService) { }
  listSanPham: ISanpham[] = [];
  filteredSanPham: ISanpham[] = [];
  originalSanPham: ISanpham[] = [];
  multiFillter: ISanpham[] = [];
  searchName: any
  selectedLoai: number = 0;
  loaisp: ILoaisp[] = [];
  ngOnInit(): void {
    this.d.getTatCaSP().subscribe(d => {
      this.listSanPham = d;
      this.filteredSanPham = d;
      this.originalSanPham = [...d];
    });
    this.d.getListLoaiSP().subscribe(d => this.loaisp = d)
  }


  filterProducts() {
    if (this.searchName || this.selectedLoai) {
      this.filteredSanPham = this.listSanPham.filter(sp =>
        (this.searchName ? sp.tensp.toLowerCase().includes(this.searchName.toLowerCase()) : true) &&
        (this.selectedLoai ? sp.idLoai === this.selectedLoai : true)
      );
      this.multiFillter = this.filteredSanPham;
    } else {
      this.filteredSanPham = [...this.originalSanPham];
    }
  }
  resetFilter() {
    this.searchName = ''
    this.selectedLoai = 0;
    this.filterProducts();
    this.isReset = true;
  }
  addToCart(product: ISanpham) {
    this.cartService.addToCart(product);
  }

  currentSort: string = 'default';
  changeSort(sortType: string) {
    this.currentSort = sortType;
    this.sortProducts();
    this.isReset = false;
  }
  sortProducts() {
    if (this.multiFillter.length > 0) {
      if (this.currentSort === 'asc') {
        this.filteredSanPham = this.multiFillter.sort((a, b) => a.giasp - b.giasp);
      } else if (this.currentSort === 'desc') {
        this.filteredSanPham = this.multiFillter.sort((a, b) => b.giasp - a.giasp);
      }
    } else {
      if (this.currentSort === 'asc') {
        this.filteredSanPham = this.listSanPham.sort((a, b) => a.giasp - b.giasp);
      } else if (this.currentSort === 'desc') {
        this.filteredSanPham = this.listSanPham.sort((a, b) => b.giasp - a.giasp);
      }
    }
  }
}

