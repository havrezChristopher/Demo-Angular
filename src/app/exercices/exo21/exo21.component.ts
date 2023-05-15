import { Component, OnInit } from '@angular/core';
import { Pokedex } from './models/pokedex.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-exo21',
  templateUrl: './exo21.component.html',
  styleUrls: ['./exo21.component.scss']
})
export class Exo21Component implements OnInit {

  private pokeAPI = 'https://pokeapi.co/api/v2/pokemon';

  currentTwenty!: Pokedex;

  constructor (private _pokemonService: PokemonService) { }

  ngOnInit (): void {
    this.loadData(this.pokeAPI);
  }

  loadData (url: string): void {
    this._pokemonService
      .getPokedex(url)
      .subscribe((data) => this.currentTwenty = data);
  }

  selectedPokemon!: string;
  showDetails (url: string): void {
    this.selectedPokemon = url;
  }

  closeDetails (): void {
    this.selectedPokemon = '';
  }

}
