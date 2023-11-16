import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: [
    './poke-list.component.scss',
    './poke-list.responsivity.component.scss',
  ],
})
export class PokeListComponent {
  public getAllPokemons: any;
  constructor(private pokeApi: PokeApiService) {
    this.pokeApi.pegarPokemon.subscribe((res) => {
      this.getAllPokemons = res.results;
      console.log(this.getAllPokemons);
    });
  }
}
