// buscador-de-canciones.component.ts
import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-buscador-de-canciones',
  templateUrl: './buscador-de-canciones.component.html',
  styleUrls: ['./buscador-de-canciones.component.sass']
})
export class BuscadorDeCancionesComponent {
  query: string = '';
  resultados: any[] = [];

  constructor(private spotifyService: SpotifyService,
    private firebaseService: FirebaseService
    ) {}


  buscarCanciones(query: string): void {
    this.spotifyService.buscarCanciones(query).subscribe(
      (data: any) => {
        console.log(data.tracks.items);
        this.resultados = data.tracks.items;
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

   agregarCancionLista(cancion:any){
    this.firebaseService.agregarCancionLista(cancion);
  }

  agregarCancionFav(cancion:any){
    this.firebaseService.agregarCancionFav(cancion);
  }
}
