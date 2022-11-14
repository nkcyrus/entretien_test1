import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/interfaces/produit';
import {ActivatedRoute, Router } from '@angular/router'
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  produit:any;
  constructor(private route: ActivatedRoute, private router: Router, private prod:ProduitService) {
   
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(prod=>{
      let id=prod['produit']
      this.prod.getProduits().subscribe(data =>{
        data.forEach(prod=>{
          if(prod.id==id) {
            this.produit=prod
            console.log(this.produit)
          }
        })
      })
      
      
        
        
    
    })
    
  }

}
