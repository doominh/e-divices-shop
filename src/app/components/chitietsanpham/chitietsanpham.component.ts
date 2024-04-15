import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DulieuService } from '../../dulieu.service';
import { ISanpham } from '../../models/isanpham';
@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrl: './chitietsanpham.component.css'
})
export class ChitietsanphamComponent {
  constructor(private d: DulieuService, private route: ActivatedRoute) { }
  spChiTiet:ISanpham={
    id:0, tensp:"", giasp:0, 
    solanxem:0, hinh:"", 
    mota:"", hot:0, ngay:"", idLoai:0
  }; 
  idSP:number=0;  
  // idLoai:number=0;
  // tenLoai:string="";
  ngOnInit(): void {
    this.idSP = Number(this.route.snapshot.params['id']);    
    this.d.getSanPhamChiTiet(this.idSP).subscribe ( 
      res => { 
        this.spChiTiet  = res[0];
        // this.idLoai = this.spChiTiet.idLoai;
        // this.d.getTenLoaiSanPham(this.idLoai).subscribe(
        //   d => this.tenLoai = d[0]['tenLoai']
        // );
      }
    );
  }
}
