import { PokemonService } from './../../pokemon.service';
import { Pokemon } from './../../helpers/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  pokemon$: Pokemon;
  id: number;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.pokemonService.getPokemonDetails(this.id).subscribe(res => {
      this.pokemon$ = res;
    })''
  }

}
