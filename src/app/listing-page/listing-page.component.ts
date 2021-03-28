import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  constructor(private dataservice:DataService) { }
data: any;
filterData:any[]=[];
  ngOnInit(): void {
    this.dataservice.getData().subscribe((re)=>{
      console.log(re);
      this.data=re;
    })
  }
  l=0;
 colorNames = [
  "black",
  "SteelBlue",
  "gray",
  "Orange",
  "LightCoral",
  "IndianRed",
];
 modalNames = [
  "groomed",
  "longhair",
  "glasses",
  "headphone",
  "hat",
  "watch",
];
 BrandNames = [
  "roadster",
  "moda",
  "hrx",
  "london hills",
  "louis philipe",
  "puma",
];
filterObjects(i:string){
  this.l=1
  // let c  = document.getElementsByClassName("chiku")
 let c= <any>document.getElementById(`${i}`)!
let k=c.innerText;
// let filterd:any[]=[];
let lowr = k.toLowerCase();
let filterd=this.data.filter((d:any) => {
if (Object.values(d).includes(lowr) || d[lowr] == true)
{
   return d;
 }
});
filterd.forEach((e:any) => {
if(!this.filterData.includes(e)){
this.filterData.push(e);
}
if(this.filterData.length==this.data.length){
  this.l=0;
  this.filterData=[];
}
});
}
}
