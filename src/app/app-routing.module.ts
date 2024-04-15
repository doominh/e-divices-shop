import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DanhsachsanphamComponent } from './components/danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './components/chitietsanpham/chitietsanpham.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { SanPhamTheoLoaiComponent } from './components/san-pham-theo-loai/san-pham-theo-loai.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './page/register/register.component';
import { ListProductComponent } from './page/list-product/list-product.component';
import { ListCategoryComponent } from './page/list-category/list-category.component';
import { ThanhToanComponent } from './components/thanh-toan/thanh-toan.component';
import { LichSuDhComponent } from './components/lich-su-dh/lich-su-dh.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'loai/:id', component:SanPhamTheoLoaiComponent},
  {path:'sanpham', component:DanhsachsanphamComponent},
  {path:'sanpham/:id', component:ChitietsanphamComponent},
  {path:'lienhe', component:LienheComponent},
  {path:'giohang', component:CartComponent},
  {path:'thanhtoan', component:ThanhToanComponent},
  {path:'lichsudh', component:LichSuDhComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'list-product', component:ListProductComponent, canActivate: [AuthGuard]},
  {path:'list-category', component:ListCategoryComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }