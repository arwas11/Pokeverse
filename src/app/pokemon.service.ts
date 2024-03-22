import { Injectable } from '@angular/core';
import { FetchedData } from './fetched-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  fetchedData: FetchedData[] = [];

  allPokemon: Pokemon[] = [];

  searchedPokemon: Pokemon[] = [];

  pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  constructor(private http: HttpClient) {}

  getPokemonData() {
    return this.http.get<FetchedData>(this.pokemonUrl)
  }

  // searchPokemon(pokemon: string): Observable<Pokemon[]>{
  //   this.http.get(this.pokemonUrl).subscribe(data => {
  //     this.searchPokemon = [data]
  //     console.log(data);
  //   })
  // }

}
