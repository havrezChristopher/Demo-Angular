import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../models/pokedex.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor (private _httpClient: HttpClient) { }

  getPokedex (url: string): Observable<Pokedex> {
    return this._httpClient.get<Pokedex>(url);
  }

  getPokemon (url: string): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(url);
  }
}
