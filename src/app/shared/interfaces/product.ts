export interface ProductRequest {
    name:string,
    components:string,
    path:string,
    category:string,
    price:string,
    weight:string,
    img:string,
    count:number,
    totalPrice:string,
}
export interface ProductResponse extends ProductRequest {
    id:number | string
}
