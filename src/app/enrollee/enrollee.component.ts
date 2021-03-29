import { Component, OnInit, Input } from '@angular/core';
import { EditComponent } from "./../edit/edit.component"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Enrollee } from '../interfaces/enrollee-interface';

@Component({
  selector: 'tr [app-enrollee]',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit {

  @Input() enrollee: Enrollee = null;
  showEdit = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showEditButton() {
    this.showEdit = true
  }

  hideEditButton = () => {
    this.showEdit = false
  }

  openEdit = () => {
    const modalRef = this.modalService.open(EditComponent, {
      size: 'md', centered: true
    });
    modalRef.componentInstance.enrollee = this.enrollee

    modalRef.result.then((enrollee: Enrollee) => {
      if (enrollee != undefined)
        this.enrollee = enrollee
    }).catch(error => console.log(error))
  }
}
