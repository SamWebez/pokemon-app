import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ConfirmComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon [];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService,
    private simpleModalService: SimpleModalService,
    ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {      
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => {
        this.showConfirm();
      });
  }
  
  goToPokemonList() { 
    this.router.navigate(['/pokemons']); 
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

  showConfirm() {
    let disposable = this.simpleModalService.addModal(ConfirmComponent, {
          title: 'Confirm title',
          message: 'Confirm message'
        })
        .subscribe((isConfirmed)=>{
            if(isConfirmed) {
                console.log('accepted');
            }
            else {
                console.log('declined');
            }
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },10000);
  }
}


