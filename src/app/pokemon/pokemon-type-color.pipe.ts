import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {  
    let color: string ;
  
    switch (type) {
      case 'Fire':
        color = 'red lighten-1';
        break;
      case 'Water':
        color = 'blue lighten-1';
        break;
      case 'Grass':
        color = 'green lighten-1';
        break;
      case 'Bug':
        color = 'green lighten-4';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Flying':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fairy':
        color = 'pink lighten-4';
        break;
      case 'Psychic':
        color = 'deep-purple darken-2';
        break;
      case 'Electric':
        color = 'lime accent-1';
        break;
      case 'Fighting':
        color = 'deep-orange';
        break;
        case 'Ground':
        color = 'brown lighten-2';
        break;
      default:
        color = 'grey';
        break;
    } 
    return 'chip ' + color;  
  }
}
