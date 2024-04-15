import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacLoaiComponent } from './cac-loai.component';

describe('CacLoaiComponent', () => {
  let component: CacLoaiComponent;
  let fixture: ComponentFixture<CacLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CacLoaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CacLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
