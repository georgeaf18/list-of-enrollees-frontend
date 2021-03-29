import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Enrollee } from '../interfaces/enrollee-interface';


@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements OnInit {

  enrolleeList: Enrollee[] = [];

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getEnrolleList()
  }

  getEnrolleList = () => {
    this.api.getEnrolleeList().subscribe((res: Enrollee[]) => {
      this.enrolleeList = res
    }, error => {
      console.error("EnrolleeListComponent -> getEnrolleList -> error", error)
      this.api.setNotification({ type: 'danger', message: 'Unable to fetch list' })
    })
  }
}
