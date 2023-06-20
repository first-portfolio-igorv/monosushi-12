import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should count',()=>{
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
    spyOn(component,"fCount").and.callThrough();
    spyOn(component,"addToBasket").and.callThrough();
    component.fCount(fake,true);
    component.addToBasket(fake);
    expect(component.fCount).toHaveBeenCalled()
    expect(component.addToBasket).toHaveBeenCalled()
  })
});
