import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiscountComponent } from './admin-discount.component';
import { Storage } from '@angular/fire/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminDiscountComponent', () => {
  let component: AdminDiscountComponent;
  let fixture: ComponentFixture<AdminDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDiscountComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        {provide:Storage, useValue:{}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check', ()=>{
    spyOn(component,"clear").and.callThrough();
    spyOn(component,"falseCheck").and.callThrough();
    spyOn(component,"AddBlock").and.callThrough();
    spyOn(component,"discount").and.callThrough();
    component.AddBlock();
    component.clear();
    component.falseCheck();
    component.discount();
    expect(component.falseCheck).toHaveBeenCalled();
    expect(component.clear).toHaveBeenCalled();
    expect(component.AddBlock).toHaveBeenCalled();
    expect(component.discount).toHaveBeenCalled();
  })
  it("should edit", ()=>{
    let fake={
      id:1,
      name:"df",
    title:"df",
    description:"df",
    path:"df"
    }
    spyOn(component,"editDiscountBlock").and.callThrough();
    component.editDiscountBlock(fake);
    expect(component.editDiscountBlock).toHaveBeenCalled();
  })
  it('should add', () => {
    spyOn(component, "addDiscount").and.callThrough();
    component.addDiscount();
    expect(component.addDiscount).toHaveBeenCalled()
  });
  it('should save', () => {
    spyOn(component, "saveDiscountChanges").and.callThrough();
    component.saveDiscountChanges();
    expect(component.saveDiscountChanges).toHaveBeenCalled()
  });
});
