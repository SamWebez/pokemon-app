import { Component, OnInit,HostListener , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { LogoutTimerComponent } from '../logout-timer/logout-timer.component';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  @ViewChild(LogoutTimerComponent) loginComponent: LogoutTimerComponent;
  @HostListener('document:click')
  @HostListener('document:keydown')

  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {}

    ngOnInit() {      
      this.pokemonService.getPokemonList()
        .subscribe(pokemonList => this.pokemonList = pokemonList);     
    }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

  resetTimerOnUserInteraction() {
    this.loginComponent.resetLogoutTimer();
  } 
}