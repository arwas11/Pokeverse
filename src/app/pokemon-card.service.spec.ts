import { TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
import { PokemonCardService } from './pokemon-card.service';
import { FetchedData } from './fetched-data';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Pokemon } from './pokemon';

describe('PokemonCardService', () => {
  // let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let pokemonCardService: PokemonCardService;
  let expectedPokemon: Pokemon[] = [];

  beforeEach(() => {
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // pokemonCardService = new PokemonCardService(httpClientSpy)
    TestBed.configureTestingModule({
      providers: [PokemonCardService, HttpClient, HttpHandler],
    });
    pokemonCardService = TestBed.inject(PokemonCardService);
  });

  it('should be created', () => {
    expect(pokemonCardService.getPokemonCards()).toBeTruthy();
  });

  // it('should return expected array of pokemon (HttpClient called once)', (done: DoneFn) => {

  //   // httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

  //   // pokemonCardService.getPokemonCards().subscribe({
  //   //   next: (data) => {
  //   //     expect(data).toBeInstanceOf(Array);
  //   //     done();
  //   //   },
  //   //   error: done.fail,
  //   // });
  //   expect(httpClientSpy).toHaveBeenCalled();
  // });
});
