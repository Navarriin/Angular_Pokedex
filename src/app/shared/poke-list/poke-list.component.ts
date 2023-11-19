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
  protected getAllPokemons: any;

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.loadingPokemons();
  }

  loadingPokemons(): void {
    this.pokeApi.loadingPage(0).subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    });
  }

  getSearch(value: string): void {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  async loading(valor: number) {
    this.pokeApi.loadingPage(valor);
    this.loadingPokemons();
  }
}
