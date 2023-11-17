import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
})
export class PokeDetailsComponent {
  private url: string = environment.apiComId;
  private urlName: string = environment.apiName;

  public pokemon: any;

  constructor(
    private activetedRoute: ActivatedRoute,
    private pokeApi: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): any {
    const id = this.activetedRoute.snapshot.params['id'];
    const pokemon = this.pokeApi.apiGetPokemons(`${this.url}/${id}`);
    const name = this.pokeApi.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe((res) => {
      this.pokemon = res;
    });
  }
}
