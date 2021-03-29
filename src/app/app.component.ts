import { Component } from '@angular/core';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enrollee-rmc';
  alertType = "success";
  notificationMessage = ""

  constructor(private api: APIService) { }

  ngOnInit() {
    this.api.notification.subscribe((res: any) => {
      this.notificationMessage = res.message;
      this.alertType = res.type

      setTimeout(() => {
        this.notificationMessage = '';
      }, 6000 * 3)
    })
  }
}
