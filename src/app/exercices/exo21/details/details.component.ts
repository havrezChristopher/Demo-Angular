import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  selectedPokemon!: Pokemon;

  @Input()
  set pokemonUrl (url: string) {
    this._pokemonService
      .getPokemon(url)
      .subscribe((data) => this.selectedPokemon = data);
  }

  constructor (private _pokemonService: PokemonService) { }

}
