import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsComponent } from './productions.component';

describe('JobworkmaterialComponent', () => {
  let component: ProductionsComponent;
  let fixture: ComponentFixture<ProductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
