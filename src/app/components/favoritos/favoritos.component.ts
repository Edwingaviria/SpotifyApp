import { Component, inject } from '@angular/core';
import { collectionData,  Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.sass']
})
export class FavoritosComponent {

  listaDeFav!: Observable<any[]>;
  firestore: Firestore = inject(Firestore);


  constructor(){
    this.getListaDeFavoritos();
  }
  getListaDeFavoritos() {
    const itemCollection = collection(this.firestore, 'lista-de-favoritos');
    this.listaDeFav = collectionData(itemCollection);
  }






}
