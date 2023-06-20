import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductComponent } from './admin-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ProductResponse } from 'src/app/shared/interfaces/product';

describe('AdminProductComponent', () => {
  let component: AdminProductComponent;
  let fixture: ComponentFixture<AdminProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        {provide:Storage, useValue:{}}

      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test clear',()=>{
    spyOn(component,"clear").and.callThrough();
    component.clear();
    expect(component.clear).toHaveBeenCalled()
  })
  it('test edit and delete ',()=>{
    let fake={
      name:"df",
    components:"df",
    path:"df",
    category:"df",
    price:"df",
    weight:"df",
    img:"df",
    count:1,
    totalPrice:"df",
    id:1
    }
    spyOn(component,"edit").and.callThrough();
    component.edit(fake);
    expect(component.edit).toHaveBeenCalled();
    spyOn(component,"delete").and.callThrough();
    component.delete(fake);
    expect(component.delete).toHaveBeenCalled();
  })
  
    
})
