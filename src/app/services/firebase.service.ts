import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc,  deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  async agregarCancionLista(cancion: any) {
    const collectionInstance = collection(this.firestore, 'lista-de-reproduccion');
    addDoc(collectionInstance, cancion)
      .then(() => {
        console.log('cancion agregada', cancion);
      })
      .catch((error) => {
        console.log(error);
        
      });
  }

  async agregarCancionFav(cancion: any) {
    const collectionInstance = collection(this.firestore, 'lista-de-favoritos');
    addDoc(collectionInstance, cancion)
      .then(() => {
        console.log('cancion agregada a favorito', cancion);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  eliminarCancionDeListaRep(id: string) {
    const docInstance = doc(this.firestore, 'lista-de-reproduccion', id);
    deleteDoc( docInstance)
      .then(() => {
        console.log('cancion eliminada de la lista de reproducción', id);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
