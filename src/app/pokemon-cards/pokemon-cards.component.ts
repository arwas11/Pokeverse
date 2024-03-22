import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.css'
})
export class PokemonCardsComponent implements OnInit{
  pokemon: Pokemon[] = []

  constructor() {}

  ngOnInit(): void {
    
  }
}
