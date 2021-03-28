import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

// @ViewChild('dinga'):ElementRef;
  constructor(private route :ActivatedRoute,private dataService:DataService) {
    // console.log("hi")
   }
cart:number|any=0;

id:any;
sid:string='';
qid:string='';
sizee:string='';
quantityy:number=0;
 totalPrice:number=0;
titlee="show more v"
  ngOnInit(): void {
  //  this.size =this.route.snapshot.params['size']
  //  this.id =this.route.snapshot.params['id']
this.dataService.getDataFromCart().subscribe((cart)=>{
  console.log(Object(cart).length);
this.cart=Object(cart).length!=0?cart:0
console.log(this.cart);
this.cart.forEach((e:any) => {
  this.totalPrice =this.totalPrice + (e.price*e.quantity);
});
console.log(this.totalPrice);
})

// console.log(this.toggle);
  }
removeItem(id:number){
  // console.log(id);
this.dataService.removeItemFromCart(id);
}
title(){
this.titlee=this.titlee=="show more v"?"show less ^":"show more v";
}
mainSize(s:string){
  this.sid=s;
 let disp= document.getElementById(s)!
 disp.style.display=disp.style.display=="none"?"block":"none";
}
mainQuantity(q:string){
  this.qid=q;
let disp= document.getElementById(q)!
 disp.style.display=disp.style.display=="none"?"block":"none";

}
size(size:string){
console.log(size);
let disp= document.getElementById(this.sid)!
setTimeout(()=>{

  disp.style.display=disp.style.display=="none"?"block":"none";
 this.sizee=size
},300)
}
quantity(quantity:number){
  let disp= document.getElementById(this.qid)!
setTimeout(()=>{

 disp.style.display=disp.style.display=="none"?"block":"none";
this.quantityy=quantity;
console.log(quantity);
},300)

}
updateCart(id:number,quant:number,siz:string){
  this.quantityy=this.quantityy==0?quant:this.quantityy;
  this.sizee=this.sizee==''?siz:this.sizee;
  this.dataService.updateCart(id,this.quantityy,this.sizee);
  location.reload();
}
}
