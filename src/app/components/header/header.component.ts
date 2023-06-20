import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { getDownloadURL, ref, Storage, uploadBytesResumable } from '@angular/fire/storage'
import { ICategoryResponse } from 'src/app/shared/interfaces/category';
import { ProductResponse } from 'src/app/shared/interfaces/product';
import { Subscription, of, reduce } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { Auth, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MobileDialogComponent } from '../mobile-dialog/mobile-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public categoryForm: any;
  public categoryList!: Array<ICategoryResponse>;
  public smalCategoryList: any = []
  public basketCheck = false;
  public menuLaptop = false;
  public menuMobile = false;
  public rotateLine = false;
  public basket!: Array<ProductResponse>;
  public totalprice = 0;
  public totalcount = 0;
  public totalProductPrice = 0;
  public price!: number;
  public count!: number;
  public userCheck = false;
  public adminCheck = false;
  public guestCheck = true;
  public authBlockActive = false;
  public callBlockActive = false;
  constructor(
    private categoryServise: CategoryService,
    private storage: Storage,
    private orderService: OrderService,
    private accountService: AccountService,
    private router:Router,
    private auth: Auth,
    private afs: Firestore,
    private dialog:MatDialog
  ) { }
  categoryNameExport(info: any) {
    this.categoryServise.categoryName = info.textContent;
    console.log(info.textContent)
  }
  basketActive() {
    this.basketCheck = !this.basketCheck;
  }
  menuActive() {
    this.menuMobile = !this.menuMobile;
    this.rotateLine = !this.rotateLine;
  }
  menuToggle() {
    this.menuLaptop = !this.menuLaptop;
    this.rotateLine = !this.rotateLine;
  }
  async uploadFile(folder: string, name: string, file: File): Promise<string> {
    const path = `${folder}/${name}`;
    let storageRef = ref(this.storage, path);
    let task = uploadBytesResumable(storageRef, file);
    await task;
    let url = getDownloadURL(storageRef);
    console.log(url)
    return Promise.resolve(url);
  }
  upload(event: any) {
    let file = event.target.files[0];
    this.uploadFile('category-images', file.name, file)
      .then(data => {
        this.categoryForm.patchValue({
          imagePath: data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
  valueByControl(control: string): string {
    return this.categoryForm.get(control)?.value;
  }
  loadCategory() {
    this.categoryServise.getAllF().subscribe(data => {
      this.categoryList = data as ICategoryResponse[];
      this.smalCategoryList=[];
      let i = 0;
      for (let info of this.categoryList) {
        if (i < 4) {
          i++;
          this.smalCategoryList.push(info)
        }
        else{
          console.log("asdf")
        }
      }
      console.log(this.smalCategoryList)
    })
  }
  loadBasket() {
    if (localStorage.length > 0 && localStorage.getItem("basket")) {
      this.basket = JSON.parse(localStorage.getItem("basket") as string)
    }
    this.totalPrice();
    this.totalCount();
  }
  totalPrice() {
    if (this.basket) {
      this.totalprice = this.basket.reduce((total: number, product: ProductResponse) => total + product.count * Number(product.price), 0)
    }
  }
  totalCount() {
    if (this.basket) {
      this.totalcount = this.basket.reduce((total: number, product: ProductResponse) => total + product.count, 0)
    }
  }
  updateBasket() {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }
  fCount(info: ProductResponse, check: boolean) {
    if (check) {
      info.count++;
      this.changeBasket(info, false, check)
    }
    else if (!check && info.count > 1) {
      info.count--;
      this.changeBasket(info, false, check)
    }
  }
  deleteItem(info:ProductResponse){
    this.changeBasket(info,true)
  }
  changeBasket(product: ProductResponse, deleteCheck:boolean, check?:boolean) {
    let basket = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      basket = JSON.parse(localStorage.getItem('basket') as string)
      if (basket.some((prod: ProductResponse) => prod.id === product.id)) {
        let index = basket.findIndex((prod: ProductResponse) => prod.id === product.id);
        if (check) {
          basket[index].count++;
          basket[index].totalPrice=Number(basket[index].price)*basket[index].count
        }
        else if(!check){
          basket[index].count--;
          basket[index].totalPrice=Number(basket[index].price)*basket[index].count
        }
        if(deleteCheck){
          for(let i=0;i<basket.length;i++){
            if(product.id==basket[i].id){
              console.log("sd");
              basket.splice(i,1);
            }
          }
        }
      }
      else {
        basket.push(product)
      }
    }
    else {
      basket.push(product)
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    product.count = 1;
    this.orderService.changeBasket.next(true)
  }
  
  openDialog() {
    this.authBlockActive=!this.authBlockActive;
    this.dialog.open(AuthDialogComponent, {
      backdropClass:"back"
    }).afterClosed().subscribe(()=>{
      this.authBlockActive=false;
      this.guestCheck=true;
    });
  }
  openMobileDialog() {
    this.callBlockActive=!this.callBlockActive;
    this.dialog.open(MobileDialogComponent, {
      backdropClass:"back"
    }).afterClosed().subscribe(()=>{
      this.callBlockActive=false;
    });
  }
  UserCheck() {
    if (localStorage.getItem("currentUser")) {
      let user = JSON.parse(localStorage.getItem("currentUser") as string);
      if (user.role == "admin") {
        this.adminCheck = true;
        this.guestCheck = false;
        this.userCheck = false;
      }
      else {
        this.guestCheck = false;
        this.userCheck = true;
      }
    }
    else {
      this.adminCheck = false;
      this.userCheck = false;
      this.guestCheck = true;
    }
  }
  userUpdate() {
    this.accountService.checkUser$.subscribe(() => {
      this.UserCheck();
    })
  }
  ngOnInit(): void {
    this.loadCategory();
    this.loadBasket();
    this.updateBasket();
    this.UserCheck();
    this.userUpdate();
  }
}
