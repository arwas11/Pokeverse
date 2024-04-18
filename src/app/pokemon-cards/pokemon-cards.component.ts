import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { PokemonService } from '../pokemon.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
// import { PokemonCardsService } from '../pokemon-cards.service';
import { PokemonCardService } from '../pokemon-card.service';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers: [
    // PokemonService,
    // PokemonCardsComponent
    PokemonCardService,
    HeaderComponent,
  ],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.css',
})
export class PokemonCardsComponent implements OnInit {
  public pokemonCards: Pokemon[] = [];

  selectedPokemon: Pokemon = {
    name: 'pokemon1',
    url: 'http',
    data: {},
    image: 'http',
    level: 0,
  };

  squad: Pokemon[] = [];

  squadLength = 0;
  message = '';

  addToSquadBtn = true;

  removeFromSquadBtn = false;

  constructor(
    // public pokemonService: PokemonService,
    public pokemonCardService: PokemonCardService
  ) {}

  ngOnInit(): void {
    this.pokemonCardService.getPokemonCards().subscribe((data) => {
      if (data.results) {
        this.pokemonCards = data.results;
        // console.log('all oninit data', data.results);
      }
      if (this.pokemonCards.length || this.pokemonCards[50].name) {
        // console.log('#0 data', this.pokemonCards[0].url);

        this.pokemonCards.map((pokemonCard) => {
          this.pokemonCardService
            .getPokemonCardsData(pokemonCard.url)
            .subscribe((nestedData) => {
              pokemonCard.data = nestedData;
              // console.log(nestedData)
            });
        });
      }
      // console.log('pokemon 0 {data}', this.pokemonCards[50].data);
      // console.log('all oninit pcard', this.pokemonCards);
    });
  }
  addPokemon(pokemon: Pokemon) {
    this.squadLength = 1;
    this.message = 'You added a Pokemon to your Squad';
    // this.addToSquadBtn = false;
    // console.log(this.addToSquadBtn);
    // console.log('selected p', pokemon);
    if (this.squad.length === 6) {
      console.log(`6 Pokemon is the max number allowed per squad`);
    }
    if (!this.squad.includes(pokemon) && this.squad.length < 6) {
      if (this.squad.length >= 1) {
        this.toggleBattleBtn = true;
        console.log(`did it update??`, this.toggleBattleBtn);
        console.log('btoggle battleBtn state', this.toggleBattleBtn);
      }

      this.squad.push(pokemon);
    }
    this.message = '';
    console.log('this is squad', this.squad);
  }
  public toggleBattleBtn = false;

  public battleBtn = false;

  battleHandler() {
    this.battleBtn = true;
    // console.log('battle btn ', this.battleBtn);
  }
  RemovePokemon(squadCard: Pokemon) {
    if (this.squad.includes(squadCard)) {
      this.message = 'You removed a Pokemon from your Squad';

      this.removeFromSquadBtn = true;
      // console.log(`removing`);
      const squadCardIndx = this.squad.indexOf(squadCard);
      // console.log(`card index`, squadCardIndx);
      this.squad.splice(squadCardIndx, 1);
      this.message = '';
      this.removeFromSquadBtn = false;
    }
    if (this.squad.length < 2) {
      this.toggleBattleBtn = false;
    }
    if (this.squad.length === 0) {
      this.toggleBattleBtn = false;
      this.squadLength = 0;
    }
  }
}
