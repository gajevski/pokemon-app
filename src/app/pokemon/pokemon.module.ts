import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './ui-components/listing/listing.component';
import { DetailsComponent } from './ui-components/details/details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListingComponent, DetailsComponent]
})
export class PokemonModule { }
