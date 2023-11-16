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
  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private pokeApi: PokeApiService) {
    this.pokeApi.pegarPokemon.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
