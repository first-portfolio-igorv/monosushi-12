import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Storage } from '@angular/fire/storage';
import { Auth, user } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers:[
        {provide:Storage,useValue:{}},
        {provide:Firestore,useValue:{}},
        {provide:Auth,useValue:{}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change total', () => {
    let fake=[{
      name:"df",
      components:"dfd",
      path:"dfdf",
      category:"dfdf",
      price:"20",
      weight:"dfd",
      img:"dfdf",
      count:1,
      totalPrice:"20",
      id:1
    }]
    component.basket=fake;
    spyOn(component, 'totalPrice').and.callThrough();
    spyOn(component, 'totalCount').and.callThrough();
    component.totalPrice();
    component.totalCount();
    expect(component.totalPrice).toHaveBeenCalled();
    expect(component.totalprice).toBe(20);
    expect(component.totalCount).toHaveBeenCalled();
    expect(component.totalcount).toBe(1)
  });
  it("menuActive check", ()=>{
    spyOn( component, "menuActive").and.callThrough();
    component.menuActive();
    expect(component.menuActive).toHaveBeenCalled();
    expect(component.menuMobile).toBe(component.menuMobile);
  })
  it("should do", ()=>{
    let info="asdf"
    spyOn(component, "categoryNameExport").and.callThrough()
    spyOn(component, "basketActive").and.callThrough()
    spyOn(component, "menuToggle").and.callThrough()
    spyOn(component, "loadCategory").and.callThrough()
    component.categoryNameExport(info);
    component.basketActive();
    component.menuToggle();
    component.loadCategory();
    expect(component.categoryNameExport).toHaveBeenCalled()
    expect(component.basketActive).toHaveBeenCalled()
    expect(component.menuToggle).toHaveBeenCalled()
    expect(component.loadCategory).toHaveBeenCalled()
  })
  it("should count", ()=>{
    let fake={
      name:"df",
    components:"df",
    path:'df',
    category:"df",
    price:"df",
    weight:"df",
    img:"df",
    count:1,
    totalPrice:"df",
    id:1
    }
    spyOn(component, "fCount").and.callThrough();
    component.fCount(fake,true);
    expect(component.fCount).toHaveBeenCalled()
  })
  it("should change", ()=>{
    let fake={
      name:"df",
    components:"df",
    path:'df',
    category:"df",
    price:"df",
    weight:"df",
    img:"df",
    count:1,
    totalPrice:"df",
    id:1
    }
    spyOn(component, "changeBasket").and.callThrough();
    component.changeBasket(fake,true);
    expect(component.changeBasket).toHaveBeenCalled()
  })
  it("should userCheck", ()=>{
    spyOn(component, "UserCheck").and.callThrough();
    component.UserCheck();
    expect(component.UserCheck).toHaveBeenCalled()
  })
});
