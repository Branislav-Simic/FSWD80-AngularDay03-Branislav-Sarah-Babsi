import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
@Injectable({
  providedIn: 'root'
})
export class CarService {


form = new FormGroup({
     $key: new FormControl(null),
     brand: new FormControl('', Validators.required),
     model: new FormControl('', Validators.required),
     kilometer: new FormControl('', [Validators.required, Validators.minLength(1)]), 
     hoursePower: new FormControl('', [Validators.required, Validators.minLength(2)]), 
     buildYear: new FormControl('', [Validators.required, Validators.minLength(4)]), 
     price: new FormControl('', [Validators.required, Validators.minLength(4)]),      
     img: new FormControl('', Validators.required,), 


	});



  constructor(public firebase: AngularFireDatabase) { }

  			carList: AngularFireList<any>;

  getCar(){
		this.carList = this.firebase.list('car');
        return this.carList.snapshotChanges();
        }


	insertCar(car){
                 this.carList.push({
                         brand: car.brand,
                         model: car.model,
                         kilometer: car.kilometer,
                         hoursePower:car.hoursePower,
                         buildYear: car.buildYear,
                         price: car.price,
                         img: car.img
                  });
         }

 populateForm(car){
          this.form.setValue(car);
  }

updateCar(car){
                 this.carList.update(car.$key,{
                     brand: car.brand,
                     model: car.model,
                     kilometer: car.kilometer,
                     hoursePower: car.hoursePower,
                     buildYear: car.buildYear,
                     price: car.price,  
                     img: car.img         
    });
  }
  
   deleteCar($key: string){
     this.carList.remove($key);
   }
  
}


