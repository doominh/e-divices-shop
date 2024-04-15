import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISanpham } from './models/isanpham';
import { ILoaisp } from './models/iloaisp';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class DulieuService {
  private apiUrl!:string
  setApiUrl(url:string):void{
    this.apiUrl=url
  }
  constructor(private http: HttpClient) {}
  getTatCaSP() {
    var url = `http://localhost:3000/sanpham`;
    return this.http.get<ISanpham[]>(url);
  }
  getSanPhamChiTiet(idSP: number = 0) {
    var url = `http://localhost:3000/sanpham?id=${idSP}`
    return this.http.get<ISanpham[]>(url);
  }
  getLaptopBanChay() {
    var url = 'http://localhost:3000/sanpham?idLoai=2&_sort=solanxem&_order=desc&_limit=6';
    return this.http.get<ISanpham[]>(url);
  }
  getDienThoaiMoi() {
    var url = 'http://localhost:3000/sanpham?idLoai=1&_sort=ngay&order=desc&_limit=6';
    return this.http.get<ISanpham[]>(url);
  }
  getListLoaiSP() {
    var url = 'http://localhost:3000/loaisp';
    return this.http.get<ILoaisp[]>(url);
  }
  getSanPhamTheoLoai(idLoai: Number = 0, pageSize: number = 1, pageNum: number = 1) {
    var url = `http://localhost:3000/sanpham?idLoai=${idLoai}&_sort=ngay&_order=desc`;
    url += `&_page=${pageNum}&_limit=${pageSize}`;
    return this.http.get<any>(url, { observe: 'response' });
  }
  getTenLoaiSanPham(idLoai: Number = 0) {
    var url = `http://localhost:3000/loaisp?id=${idLoai}`;
    return this.http.get<ILoaisp[]>(url);
  }

  ///////////////////////////////////
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
  getItem(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/"+id)
  }
  addItem(item:any): Observable<any>{
    return this.http.post(this.apiUrl,item)
  }

  updateItem(id:number, item: any):Observable<any>{
    return this.http.put(this.apiUrl+"/"+id, item)
  }

  deleteItem(id: number): Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/"+id)
  }
  //////////////////////////////////////
  getCates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
  getCate(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/"+id)
  }
  addCate(cate:any): Observable<any>{
    return this.http.post(this.apiUrl,cate)
  }

  updateCate(id:number, cate: any):Observable<any>{
    return this.http.put(this.apiUrl+"/"+id, cate)
  }

  deleteCate(id: number): Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/"+id)
  }
}
