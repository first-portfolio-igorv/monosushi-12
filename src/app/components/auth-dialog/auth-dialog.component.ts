import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, docData, doc, setDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
  public userCheck = false;
  public adminCheck = false;
  public guestCheck = true;
  public authBlockActive = false;
  public email!: string;
  public password = "";
  public name = "";
  public surname = "";
  public signInCheck = true;
  public testCheck = false;
  public fail = false;
  public loginSubscription!: Subscription;
  constructor(
    private router:Router,
    private auth: Auth,
    private afs: Firestore,
    private accountService: AccountService,
    private dialogRef:MatDialogRef<AuthDialogComponent>
  ) { }

  ngOnInit(): void {
  }
  signInIcon() {
    this.signInCheck = true;
    this.clearInput();
  }
  signUpIcon() {
    this.signInCheck = false;
    this.clearInput();
  }
  clearInput() {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.password = "";
    this.fail = false;
  }
  test() {
    let count = 0;
    let test = [];
    test[0] = /^[А-Яа-яA-Za-z]{3,15}$/.test(this.name);
    test[1] = /^[А-Яа-яA-Za-z]{3,15}$/.test(this.surname);
    test[2] = /^[A-Za-z0-9,.,-]+@[A-Za-z0-9,.,-]+$/.test(this.email);
    test[3] = /^\w{5,20}$/.test(this.password);

    for (const check of test) {
      count++;
      if (check == false) {
        this.testCheck = false;
        this.fail = true;
        break;
      }
      else if (count == test.length) {
        // let users = JSON.parse(localStorage.getItem("users") as string);
        // for (const info of users) {
        //   if (info.email == this.email) {
        //     this.testCheck = false;
        //     this.fail = true;
        //     break
        //   }
          
        // }
      this.testCheck = true;
      }
    }
  }
  signIn() {
    let email = this.email;
    let password = this.password;
    this.login(email, password).then(() => {
      console.log("done")
      this.dialogRef.close()
    }).catch(e => {
      console.log(e)
      this.fail=true;
    })
  }
  async login(email: string, password: string): Promise<void> {
    let credential = await signInWithEmailAndPassword(this.auth, email, password);
    this.loginSubscription = docData(doc(this.afs, "users", credential.user.uid)).subscribe(user => {
      let currentUser = { ...user, uid: credential.user.uid };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      if (user['role']=="admin") {
        this.adminCheck = true;
        this.userCheck = false;
        this.guestCheck = false;
        this.authBlockActive = false;
        this.router.navigate(["/admin"])
      }
      else {
        this.adminCheck = false
        this.userCheck = true;
        this.guestCheck = false;
        this.authBlockActive = false;
        this.router.navigate(["/cabinet"])
      }
      this.clearInput()
    }, (e) => {
      this.fail=true;
    })
  }
  signUp() {
    // let users = [];
    // let info = {
    //   email: this.email,
    //   password: this.password,
    //   name: this.name,
    //   surname: this.surname,
    //   role: "user"
    // }
    // this.test();
    // if (this.testCheck) {
    //   this.authBlockActive = false;
    //   this.guestCheck = false;
    //   this.userCheck = true;
    //   users = JSON.parse(localStorage.getItem("users") as string);
    //   users.push(info);
    //   localStorage.setItem("users", JSON.stringify(users));
    //   localStorage.setItem("currentUser", JSON.stringify(info));
    //   this.accountService.create(info).subscribe(() => {
    //     this.loadAccount()
    //   })
    // }
    // else {
    //   this.fail = true;
    // }
    let email = this.email;
    let password = this.password;
    this.register(email,password).then(()=>{
      console.log("signUp is done")
    }).catch(e=>{
      console.log(e)
      this.fail=true;
    })
  }
  async register(email:string,password:string){
    this.test();
    if (this.testCheck) {
    let credential=await createUserWithEmailAndPassword(this.auth,email,password);
    this.dialogRef.close();
    let user = {
        email: this.email,
        name: this.name,
        lastName: this.surname,
        role: "user",
        phoneNum:"",
        order:[]
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      this.authBlockActive = false;
      this.guestCheck = false;
      this.userCheck = true;
      this.clearInput()

    setDoc(doc(this.afs,"users",credential.user.uid),user);
    }
    else{
      this.fail=true;
    }
  }
  loadAccount() {
    this.accountService.getAll().subscribe(info => {
      localStorage.setItem("users", JSON.stringify(info))
    })
  }
}
