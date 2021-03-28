import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
data: any=0;
 id:number=0;
filterData:any[]=[];
disable=true;
size:any;
indexSize:any;
cart:any;
  ngOnInit(): void {

   this.id =+this.route.snapshot.params['id']
   this.dataservice.getDataLandingPage( this.id).subscribe((re)=>{
      console.log(re);
      this.data=Object(re)[0];

      console.log(Object(re)[0].img);
      console.log(this.data);
      console.log(this.data.coments);

    })
this.dataservice.getDataFromCartLandingPage(this.id).subscribe((res)=>{
  console.log(res);
  this.cart=res;
})
  }
  sizeFunction(a:string,b:number){
    console.log(a)
    this.size=a;
    this.indexSize=b;
   let c= document.getElementById('size'+b)!
   console.log(c);
   c.style.border="2px solid #ff3e6c";
   c.style.color="#ff3e6c";
    this.disable=false;
    setTimeout(()=>{
    this.disable=true;
c.style.border="2px solid grey";
   c.style.color="black";
    },1500)
  }
  cartPageDisplay(){
let filtercart=this.cart.filter((e:any) => {
if(this.size==e.size && this.id==e.productId){
console.log(e);
       this.dataservice.editCart(e.id ,e.quantity+1);
return e;
}
});
console.log(filtercart);
if(filtercart.length==0){
      this.dataservice.addToCart(this.data,this.size,this.indexSize);
}
  this.router.navigate(['/cart',this.data.id,this.size], { relativeTo: this.route });
  }

}
