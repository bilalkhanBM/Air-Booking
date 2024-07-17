import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizedQuotationComponent } from './centralized-quotation.component';

describe('CentralizedQuotationComponent', () => {
  let component: CentralizedQuotationComponent;
  let fixture: ComponentFixture<CentralizedQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralizedQuotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentralizedQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
