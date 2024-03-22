import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule, MatGridListModule],
  providers: [PokemonService],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.css',
})
export class PokemonCardsComponent implements OnInit {
  pokemonCards: Pokemon[] = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonData().subscribe((data) => {
      // this.fetchedData = [data];
      if(data.results.length > 100){
        this.pokemonCards = data.results;
        console.log('all oninit', this.pokemonCards);
      }
    });
  }


}
