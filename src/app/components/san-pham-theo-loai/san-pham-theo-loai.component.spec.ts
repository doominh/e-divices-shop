import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai.component';

describe('SanPhamTheoLoaiComponent', () => {
  let component: SanPhamTheoLoaiComponent;
  let fixture: ComponentFixture<SanPhamTheoLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanPhamTheoLoaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanPhamTheoLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
