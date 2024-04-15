import { Injectable } from '@angular/core';
import { FetchedData } from './fetched-data';
// import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { PokemonCardService } from './pokemon-card.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  fetchedData: FetchedData[] = [];

  allPokemon: Pokemon[] = [];

  searchedPokemon: Pokemon[] = [];


  pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${}`;

  constructor(private http: HttpClient, private pokemonCardService: PokemonCardService) {}

  getPokemonData() {
    // this.pokemonCardService.getPokemonCardsData().subscribe((data) => {
    //   if (data.results.length > 10) {
    //     this.pokemonCards = data.results;
    //     console.log('all oninit', this.pokemonCards);
    //   }
    // });  
  }

  // searchPokemon(pokemon: string): Observable<Pokemon[]>{
  //   this.http.get(this.pokemonUrl).subscribe(data => {
  //     this.searchPokemon = [data]
  //     console.log(data);
  //   })
  // }

}
