import { Component, OnInit } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit{
  categories: any
  category: any = {}
  isFetching: any;
  error: any;
  disableUpdate: boolean = true;
  constructor(private dataService: DulieuService, private router: Router, private route: ActivatedRoute) {
    this.dataService.setApiUrl('http://localhost:3000/loaisp');
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.isFetching = true;
    setTimeout(() =>{
      this.dataService.getCates().subscribe(data => {
      this.isFetching = false;
      this.categories = data;
    }, error => {
      this.error = error.message;
    })
    },1000)

    
  }
  editCategory(id: number) {
    this.dataService.getCate(id).subscribe(data => {
      this.category = data
      this.disableUpdate = false
    })
  }
  addnew(productForm: any) {``
    if (productForm.valid) {
      this.dataService.addCate(productForm.value).subscribe(() => this.loadData())
      productForm.reset()
    } else {
      Object.keys(productForm.controls).forEach((field) => {
        const control = productForm.controls[field];
        control.markAsTouched();
      });
    }
  }
  update(cateId: number, productForm: any) {
    if (productForm.valid) {
      this.dataService.updateItem(cateId, this.category)
        .subscribe(() => this.loadData())
      productForm.reset()
      this.disableUpdate = true;
    }
  }
  deleteCategory(id: any) {
    this.dataService.deleteCate(id).subscribe(() => this.loadData())
  }
}
