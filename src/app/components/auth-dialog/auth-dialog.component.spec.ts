import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDialogComponent } from './auth-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthDialogComponent', () => {
  let component: AuthDialogComponent;
  let fixture: ComponentFixture<AuthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDialogComponent ],
      imports:[
        RouterTestingModule,
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers:[
        {provide:MatDialogRef, useValue:{}},
        {provide:Auth, useValue:{}},
        {provide:Firestore, useValue:{}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check', ()=>{
    spyOn(component,"signInIcon").and.callThrough();
    spyOn(component,"signUpIcon").and.callThrough();
    component.signInIcon();
    component.signUpIcon();
    expect(component.signUpIcon).toHaveBeenCalled();
    expect(component.signInIcon).toHaveBeenCalled();
  })
  it('should test', ()=>{
    spyOn(component,"test").and.callThrough();
    component.test();
    expect(component.test).toHaveBeenCalled()
  })
  it('should signIn', ()=>{
    spyOn(component,"signIn").and.callThrough();
    component.signIn();
    expect(component.signIn).toHaveBeenCalled()
  })
});
