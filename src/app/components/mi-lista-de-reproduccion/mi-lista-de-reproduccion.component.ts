
import { Component, inject } from '@angular/core';
import {
  collectionData,
  collection,
  doc,
  Firestore,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mi-lista-de-reproduccion',
  templateUrl: './mi-lista-de-reproduccion.component.html',
  styleUrls: ['./mi-lista-de-reproduccion.component.sass'],
})
export class MiListaDeReproduccionComponent {

  listaDeReproduccion!: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(private firebaseService: FirebaseService) {
    this.getListaDeReproduccion();
  }

  getListaDeReproduccion() {
    const itemCollection = collection(this.firestore, 'lista-de-reproduccion');
    collectionData(itemCollection).subscribe();

    this.listaDeReproduccion= collectionData(itemCollection, {idField: 'id'})
  }

  eliminarCancionDeListaRep(id:any){
    this.firebaseService.eliminarCancionDeListaRep(id);
  }
}
