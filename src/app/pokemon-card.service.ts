import { Injectable } from '@angular/core';
import { FetchedData } from './fetched-data';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {
  fetchedData: FetchedData[] = [];
  pokemonCardsUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  // pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon`;

  constructor(public http: HttpClient) { }

  getPokemonCards() {
      return this.http.get<FetchedData>(this.pokemonCardsUrl)
    }

  getPokemonCardsData(pokemonUrl: string) {
      return this.http.get<Pokemon>(`${pokemonUrl}`)
    }
}
