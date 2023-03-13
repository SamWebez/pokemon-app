import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private toast: NgToastService
  ) { }

  
  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypeValid(type: string): boolean {

    if(this.pokemon.types.length == 1 && this.hasType(type))  {
      return false;
    } 

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon: Pokemon) => {
        this.openAddSuccess();
        setTimeout(() => {
        this.router.navigate(['/pokemon', pokemon.id])}, 1500)
      });
    }else{
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => {
        this.openSuccess();
        setTimeout(() => {
        this.router.navigate(['/pokemon', this.pokemon.id])}, 1500)
      });
    }
  }

  openSuccess() {
    this.toast.success({detail:'Confirmation', summary:'Success!', 
    sticky: false, position:'bl', duration: 1500});
  }

  openAddSuccess() {
    this.toast.success({detail:'Confirmation', summary:'Pokemon has been added!', 
    sticky: false, position:'bl', duration: 1500});
  }

}
