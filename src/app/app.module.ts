import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './composants/produits/produits.component';

import { ProduitService } from './services/produit.service';
import { HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './composants/details/details.component'
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './composants/add/add.component';
import { NgModel, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule,
    RouterModule.forRoot([{ path: 'produits', component: ProduitsComponent },{ path: 'details/:produitId', component:DetailsComponent }, { path: 'add', component: AddComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
