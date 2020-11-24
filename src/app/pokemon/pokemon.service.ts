import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './helpers/pokemon.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly URL: string = 'http://localhost:7000/pokemons';

constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get(this.URL).pipe(
      map((response: HttpResponse<any>): Pokemon[] => {
        return (<any>response);
      })
    );
  }

  getPokemonDetails(id: number): Observable<Pokemon> {
    return this.http.get(`${this.URL}/${id}`).pipe(
      map((response: HttpResponse<any>): Pokemon => {
        return (<any>response);
      })
    );
  }

}
