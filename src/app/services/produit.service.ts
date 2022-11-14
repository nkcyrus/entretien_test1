import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private data_url='/assets/data/produits.json'
  constructor(private http: HttpClient) { }
  

  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.data_url)
  }

  getProduit(id:any):any{
    let x:any
    this.http.get<Produit[]>(this.data_url).subscribe(data=>{
      data.forEach(prod=>{
        if(prod.id=id) {
          x=prod
          ///console.log(x)
          
          
        }
      })
    })
    console.log(x)
    return x;
    
  }

  setProduit(prod: Produit) {
    this.http.post(`${this.data_url}`, prod)
      
  }

  updateProduit(prod: Produit, id:any): Observable<Produit> {
    return this.http.put<Produit>(`${this.data_url}/${id}`, prod)
  }

  deleteProduit(id: any) {
    return this.http.delete(`${this.data_url}/${id}`)
  }
}
