import { Component, OnInit } from '@angular/core';
import { CarService } from "../shared/car.service";


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
 carArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";


  constructor(public carService: CarService) { }

  ngOnInit() {
  	this.carService.getCar().subscribe(
                 (list) => {
                         this.carArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });;
  }

onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.carService.deleteCar($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
       }
   }

filterCondition(car){
   return car.brand.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
  }

}
