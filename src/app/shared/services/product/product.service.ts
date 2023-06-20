import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductRequest, ProductResponse } from '../../interfaces/product';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {  Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { CollectionReference, DocumentData } from '@firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  public url=environment.BACKEND_URL;
  public api={product:`${this.url}/product`}
  public collection:CollectionReference<DocumentData>
  getAll(){
    return collectionData(this.collection, {idField:"id"})
  }
  getOne(id:string){
    let product=doc(this.afs, `products/${id}`)
    return docData(product, {idField:"id"})
  }
  add(info:ProductRequest){
    return addDoc(this.collection, info)
  }
  delete(id:string){
    let product=doc(this.afs, `products/${id}`)
    return deleteDoc(product)
  }
  edit(info:ProductRequest, id:string){
    let product= doc(this.afs, `products/${id}`)
    return updateDoc(product,{...info})
  }
  resolve(route:ActivatedRouteSnapshot){
    let product= doc(this.afs, `products/${route.paramMap.get("id")}`)
    return docData(product, {idField:"id"})
  }
  constructor(
    public http:HttpClient,
    private afs:Firestore
  ) { 
     this.collection=collection(this.afs,"products")
  }
}
