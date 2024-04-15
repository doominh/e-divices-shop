import { Component, OnInit } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit{
  products: any
  product: any = {}
  isFetching: any;
  error: any;
  disableUpdate: boolean = true;
  constructor(private dataService: DulieuService, private router: Router, private route: ActivatedRoute) {
    this.dataService.setApiUrl('http://localhost:3000/sanpham');
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.isFetching = true;
    setTimeout(() =>{
      this.dataService.getItems().subscribe(data => {
      this.isFetching = false;
      this.products = data;
    }, error => {
      this.error = error.message;
    })
    },1000)

    
  }
  editProduct(id: number) {
    this.dataService.getItem(id).subscribe(data => {
      this.product = data
      this.disableUpdate = false
    })
  }
  addnew(productForm: any) {``
    if (productForm.valid) {
      this.dataService.addItem(productForm.value).subscribe(() => this.loadData())
      productForm.reset()
    } else {
      Object.keys(productForm.controls).forEach((field) => {
        const control = productForm.controls[field];
        control.markAsTouched();
      });
    } 
  }
  update(productId: number, productForm: any) {
    if (productForm.valid) {
      this.dataService.updateItem(productId, this.product)
        .subscribe(() => this.loadData())
      productForm.reset()
      this.disableUpdate = true;
    }
  }
  deleteProduct(id: any) {
    this.dataService.deleteItem(id).subscribe(() => this.loadData())
  }
}
