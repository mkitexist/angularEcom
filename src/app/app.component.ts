import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ANGULAR-TOPICS';
  size:any;
constructor(private route:ActivatedRoute){}
 ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(
      "hi man"
    )
      // this.size = +this.route.snapshot.params['id']
      // console.log(this.size);
    //    this.route.queryParams.subscribe(params => {
    //     let date = params.id;
    //     console.log(date); // Print the parameter to the console.
    // });
    this.size =+this.route.snapshot.params['id']
console.log(this.size);
  }

}
