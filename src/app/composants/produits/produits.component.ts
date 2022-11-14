import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public list_produits:Produit[]=[];

  constructor(private prod:ProduitService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.prod.getProduits().subscribe(data =>{
      this.list_produits=data
    })
  }

  deleteproduct(id:any){
    console.log(id)
    this.prod.deleteProduit(id)
  }
  // showDetails(product){
  //   //this.
  // }
}
