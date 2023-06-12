import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }


  buscarCanciones(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'BQBBTXdkt1wTTj1oKxGjOeA3W_zmqss-3fyJBBHCLKJeEwRfRTg49n9lMnuIRYUAEy0npP9m3WdminfTHzq8uV1H8MbuB6NdzUww3oIiN1YrdcfE63A'
    });
    const options = { headers: headers };
    const url = `${this.apiUrl}/search?q=${query}&type=track`;
    return this.http.get(url, options);
  }


}
