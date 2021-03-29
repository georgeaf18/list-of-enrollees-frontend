import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnrolleeListComponent } from './enrollee-list/enrollee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { APIService } from './services/api.service';
import { EnrolleeComponent } from './enrollee/enrollee.component';
import { AvatarModule } from "ngx-avatar";
import { EditComponent } from './edit/edit.component';
import { NgbModalModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    EnrolleeListComponent,
    EnrolleeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AvatarModule,
    NgbModalModule,
    NgbAlertModule
  ],
  providers: [APIService],
  entryComponents: [EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
