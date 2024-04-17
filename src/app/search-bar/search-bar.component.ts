import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  // searchedPokemon : Pokemon[] = []
  // searchInput = new FormControl('');

}
