import { PokemonRoutingModule } from './pokemon-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './ui-components/listing/listing.component';
import { DetailsComponent } from './ui-components/details/details.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  declarations: [ListingComponent, DetailsComponent],
  providers: [PokemonService]
})
export class PokemonModule { }
