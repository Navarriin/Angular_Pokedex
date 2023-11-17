import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  private url: string = environment.apiComId;
  private urlName: string = environment.apiName;

  public pokemon: any;
  protected isLoading: boolean = false;
  protected error: boolean = false;

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

    return forkJoin([pokemon, name]).subscribe(
      (res) => {
        this.pokemon = res;
        this.isLoading = true;
      },
      (_error) => {
        this.error = true;
      }
    );
  }
}
