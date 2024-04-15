import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ILoaisp } from '../../models/iloaisp';
@Component({
  selector: 'app-cac-loai',
  templateUrl: './cac-loai.component.html',
  styleUrl: './cac-loai.component.css'
})
export class CacLoaiComponent {
  constructor(private d: DulieuService) {}
  listLoaiSP: ILoaisp[] = [];
  ngOnInit(): void {
    this.d.getListLoaiSP().subscribe(d => this.listLoaiSP = d)
  }
}
