import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check', ()=>{
    spyOn(component,"category").and.callThrough();
    spyOn(component,"falseCheck").and.callThrough();
    spyOn(component,"goods").and.callThrough();
    spyOn(component,"discount").and.callThrough();
    spyOn(component,"order").and.callThrough();
    spyOn(component,"logout").and.callThrough();
    component.category();
    component.goods();
    component.falseCheck();
    component.discount();
    component.order();
    component.logout();
    expect(component.falseCheck).toHaveBeenCalled();
    expect(component.category).toHaveBeenCalled();
    expect(component.goods).toHaveBeenCalled();
    expect(component.discount).toHaveBeenCalled();
    expect(component.order).toHaveBeenCalled();
    expect(component.logout).toHaveBeenCalled();
  })
});
