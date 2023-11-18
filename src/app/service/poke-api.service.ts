import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private off: string = '0';
  private limit: string = '10';

  constructor(private http: HttpClient) {}

  pegarPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      })
    );
  }

  loadingPage(valor: number): Observable<any> {
    const off: number = parseInt(this.off);
    const offf: number = off + valor;
    this.off = offf.toString();

    const limit: number = parseInt(this.limit);
    const limitt: number = limit + valor;
    this.limit = limitt.toString();

    let url = `${this.url}?offset=${offf}&limit=${limitt}`;

    return this.pegarPokemon(url);
  }

  apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
