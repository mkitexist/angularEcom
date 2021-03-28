import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
idd:any;
  constructor(private htthpmyntra:HttpClient) {
    console.log("hii");

  }

url='http://localhost:3000/'


getData(){
  return this.htthpmyntra.get(this.url+"data")
}
ngOnInit(): void {
  // console.log(this.idd);
  // console.log("hii")
}
getDataLandingPage(id:number){
    console.log(this.idd);
  console.log("hii")
  return this.htthpmyntra.get(this.url+"data?id="+id);

}
addToCart(data:any,size:string,indx:any){
this.htthpmyntra.post(this.url+"cart",{
"productId":data.id,
  "brand":data.brand,
  "img":data.img[indx],
  "size":size,
  "price":data.price,
  "product":"product",
  "quantity":1
}).subscribe();
}
getDataFromCart(){
  return this.htthpmyntra.get(this.url+"cart")
}
getDataFromCartLandingPage(id:number){
  return this.htthpmyntra.get(this.url+"cart?productId="+id);
}
removeItemFromCart(id:number){
this.htthpmyntra.delete(this.url+"cart/"+id).subscribe();
location.reload();
}
editCart(id:number,quantity:number){
this.htthpmyntra.patch(this.url+"cart/"+id,{
  "quantity":quantity
}).subscribe();
}
updateCart(id:number,quantity:number,size:string){
this.htthpmyntra.patch(this.url+"cart/"+id,{
  "quantity":quantity,
  "size":size
}).subscribe();
}

}
