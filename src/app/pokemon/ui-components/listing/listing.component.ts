import { PokemonService } from './../../pokemon.service';
import { Pokemon } from './../../helpers/pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass']
})
export class ListingComponent implements OnInit {

  pokemons$: Pokemon[];

  constructor(private pokemonsService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe(res => {
      this.pokemons$ = res;
    });
  }

}
