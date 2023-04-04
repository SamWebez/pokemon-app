import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
    selector: 'confirm',
    templateUrl: './confirm-modal.component.html'
})
export class ConfirmComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(
    private router: Router,
    private toast: NgToastService,
  ) {
    super();
  }

  openSuccess() {
    this.toast.success({detail:'Confirmation', summary:'The pokemon has been deleted', 
    sticky: false, position:'bl', duration: 1500});
  }

  goToPokemonList() { 
    this.router.navigate(['/pokemons']); 
  }

  confirm() {
    this.result = true;
    this.close();
    this.openSuccess();
    setTimeout(() => {
      this.goToPokemonList();
    }, 1000)
  }
} 

