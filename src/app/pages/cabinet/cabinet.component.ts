import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
  public selfInfoActive=true;
  public orderHistoryActive=false;
  public changePasswordActive=false;
  constructor(
    private router:Router,
    private accountService:AccountService
  ) { }
  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['']);
    this.accountService.checkUser$.next(true);
  }
  confirm(){
    
  }
  buttonCheck(num:number){
    if(num==1){
      this.orderHistoryActive=false;
      this.selfInfoActive=true;
      this.changePasswordActive=false;
    }
    if(num==2){
      this.orderHistoryActive=true;
      this.selfInfoActive=false;
      this.changePasswordActive=false;
    }
    if(num==3){
      this.orderHistoryActive=false;
      this.selfInfoActive=false;
      this.changePasswordActive=true;
    }
  }
  ngOnInit(): void {
  }

}
