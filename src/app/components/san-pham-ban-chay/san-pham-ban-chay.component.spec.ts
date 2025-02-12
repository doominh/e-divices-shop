import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamBanChayComponent } from './san-pham-ban-chay.component';

describe('SanPhamBanChayComponent', () => {
  let component: SanPhamBanChayComponent;
  let fixture: ComponentFixture<SanPhamBanChayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanPhamBanChayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanPhamBanChayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
