import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
{
	path:"", component: HomeComponent
},
{
	path:"rent", component: CarComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
