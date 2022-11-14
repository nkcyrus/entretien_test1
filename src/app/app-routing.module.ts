import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './composants/details/details.component';
import { ProduitsComponent } from './composants/produits/produits.component';

const routes:Routes=[
  {path:"produits", component: ProduitsComponent},
  {path: "details", component:DetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
