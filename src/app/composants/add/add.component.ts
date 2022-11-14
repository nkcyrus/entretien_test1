import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms'
import { Produit } from 'src/app/interfaces/produit';

import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id:any;
  nom:any;
  desc:any;
  prix:any
  constructor(private prod:ProduitService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.prod.setProduit({"id":this.id,"description":this.desc,"nom_produit":this.nom,"prix_produit":this.prix, "img_produit":'None'})
  }
  


}
