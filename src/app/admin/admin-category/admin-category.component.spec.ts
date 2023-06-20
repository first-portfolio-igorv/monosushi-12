import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryComponent } from './admin-category.component';
import { Auth } from '@angular/fire/auth';
import { Storage } from '@angular/fire/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminCategoryComponent', () => {
  let component: AdminCategoryComponent;
  let fixture: ComponentFixture<AdminCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        {provide:Auth, useValue:{}},
        {provide:Storage, useValue:{}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryComponent);
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
    component.AddBlock();
    component.clear();
    component.falseCheck();
    expect(component.falseCheck).toHaveBeenCalled();
    expect(component.clear).toHaveBeenCalled();
    expect(component.AddBlock).toHaveBeenCalled();
  })
  it("should edit", ()=>{
    let fake={
      id:1,
      name:"dsf",
      imagePath:"sadf",
      path:"asdf"
    }
    spyOn(component,"editCategoryBlock").and.callThrough();
    component.editCategoryBlock(fake);
    expect(component.editCategoryBlock).toHaveBeenCalled();
  })
  it('should add', () => {
    spyOn(component, "addCategory").and.callThrough();
    component.addCategory();
    expect(component.addCategory).toHaveBeenCalled()
  });
  it('should save', () => {
    spyOn(component, "saveCategoryChanges").and.callThrough();
    component.saveCategoryChanges();
    expect(component.saveCategoryChanges).toHaveBeenCalled()
  });
});
