import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  @ViewChild('customModal')customModalRef : ElementRef;

  customModalOpened : boolean = false;

  constructor(private modalService: NgbModal) { }
  closeResult: string;
  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      
    }, (reason) => {
    });
  }

  openCustomModal(){
    this.customModalOpened = true;
  }

  ctClose(){
    this.customModalOpened = false;
  }

}
