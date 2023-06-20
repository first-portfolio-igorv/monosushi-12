import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should count", ()=>{
    let fake={
      name:"df",
    components:"df",
    path:"df",
    category:"df",
    price:"fd",
    weight:"f",
    img:"f",
    count:1,
    totalPrice:"df",
    id:1
    }
    spyOn(component, "fCount").and.callThrough();
    component.fCount(fake,true);
    expect(component.fCount).toHaveBeenCalled()
  })
  it("should add", ()=>{
    let fake={
      name:"df",
    components:"df",
    path:"df",
    category:"df",
    price:"fd",
    weight:"f",
    img:"f",
    count:1,
    totalPrice:"df",
    id:1
    }
    spyOn(component, "addToBasket").and.callThrough();
    component.addToBasket(fake);
    expect(component.addToBasket).toHaveBeenCalled()
  })
});
