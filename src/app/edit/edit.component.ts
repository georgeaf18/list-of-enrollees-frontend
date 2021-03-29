import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { APIService } from '../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Enrollee } from '../interfaces/enrollee-interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() enrollee
  editForm = null;
  submitted = false;

  constructor(private api: APIService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl(this.enrollee.name, [Validators.minLength(3), Validators.required]),
      active: new FormControl(this.enrollee.active),
      dateOfBirth: new FormControl(this.enrollee.dateOfBirth)
    })
  }

  get f() {
    return this.editForm.controls
  }

  submit = () => {
    this.submitted = true;
    if (!this.editForm.valid)
      return

    this.api.updateEnrollee(this.enrollee.id, this.editForm.value).subscribe((res: Enrollee) => {
      if (res.id !== undefined) {
        this.activeModal.close(res);
        this.api.setNotification({ type: 'success', message: 'Successfully Updated' })
      }
    }, error => {
      console.error("EditComponent -> submit -> error", error)
      this.api.setNotification({ type: 'danger', message: 'Update Failed' })
    })
  }

}
