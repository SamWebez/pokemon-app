import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-delete-modal',
  templateUrl: 'delete-modal.component.html'  
})

export class DeleteModalComponent implements OnInit {

  constructor(
    public modalRef: MdbModalRef<DeleteModalComponent>
  ) { }

  ngOnInit(): void {
  }

}
