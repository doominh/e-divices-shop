import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChitietsanphamComponent } from './components/chitietsanpham/chitietsanpham.component';
import { DanhsachsanphamComponent } from './components/danhsachsanpham/danhsachsanpham.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { HttpClientModule } from '@angular/common/http';
import { SanPhamBanChayComponent } from './components/san-pham-ban-chay/san-pham-ban-chay.component';
import { SanPhamMoiComponent } from './components/san-pham-moi/san-pham-moi.component';
import { CacLoaiComponent } from './components/cac-loai/cac-loai.component';
import { SanPhamTheoLoaiComponent } from './components/san-pham-theo-loai/san-pham-theo-loai.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './page/register/register.component';
import { ListProductComponent } from './page/list-product/list-product.component';
import { ListCategoryComponent } from './page/list-category/list-category.component';
import { ThanhToanComponent } from './components/thanh-toan/thanh-toan.component';
import { LichSuDhComponent } from './components/lich-su-dh/lich-su-dh.component';
@NgModule({
  declarations: [
    AppComponent,
    DanhsachsanphamComponent,
    ChitietsanphamComponent,
    HomeComponent,
    NotfoundComponent,
    LienheComponent,
    SanPhamBanChayComponent,
    SanPhamMoiComponent,
    CacLoaiComponent,
    SanPhamTheoLoaiComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    ListCategoryComponent,
    ThanhToanComponent,
    LichSuDhComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}