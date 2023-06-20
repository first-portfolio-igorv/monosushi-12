import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiscountRequest, DiscountResponse } from '../../interfaces/discount';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { addDoc, collectionData, CollectionReference, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { DocumentData, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DiscountService{

  constructor(
    private http:HttpClient,
    private afs:Firestore

      ) { 
        this.collection=collection(this.afs, "discounts")
      }
  public url=environment.BACKEND_URL;
  public api={discounts:`${this.url}/discounts`}
  public collection:CollectionReference<DocumentData>;
  getAll(){
    return collectionData(this.collection, {idField:"id"});
  }
  getOne(id:string){
    let discount= doc(this.afs, `discounts/${id}`);
    return docData(discount, {idField:"id"});
  }
  add(info:DiscountRequest){
    return addDoc(this.collection, info)
  }
  delete(id:string){
    let discount=doc(this.afs, `discounts/${id}`)
    return deleteDoc(discount)
  }
  edit(info:DiscountRequest,id:string){
    let discount=doc(this.afs, `discounts/${id}`)
    return updateDoc(discount,{...info})
  }
  resolve(route:ActivatedRouteSnapshot){
    let discount=doc(this.afs, `discounts/${route.paramMap.get("id")}`)
    return docData(discount, {idField:"id"})
  }
}
