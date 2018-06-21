import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baker',
  templateUrl: './baker.component.html',
  styleUrls: ['./baker.component.css']
})
export class BakerComponent implements OnInit {
  @Input() selectedCake;
  averageRating : any; 
  

  constructor() { }

  ngOnInit() {
    this.avg(this.selectedCake);
  }
 avg(selectedCake){
   let cakeRating = this.selectedCake.comments
   var sum =  0
   for(var i = 0 ; i < cakeRating.length; i++){
    
      
      
      sum += cakeRating[i].rating;
      
      
   }
   this.averageRating = Math.floor(sum/cakeRating.length)
   
   

 }

}
