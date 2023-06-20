import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check",()=>{
    spyOn(component,"check1").and.callThrough();
    spyOn(component,"check2").and.callThrough();
    spyOn(component,"check3").and.callThrough();
    spyOn(component,"check4").and.callThrough();
    component.check1();
    component.check2();
    component.check3();
    component.check4();
    expect(component.check1).toHaveBeenCalled();
    expect(component.check2).toHaveBeenCalled();
    expect(component.check3).toHaveBeenCalled();
    expect(component.check4).toHaveBeenCalled();
  })
});
