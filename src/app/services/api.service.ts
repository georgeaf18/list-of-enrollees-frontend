import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

const API_URL = environment.API;


@Injectable()
export class APIService {
  constructor(private http: HttpClient) { }

  private _notification: BehaviorSubject<any> = new BehaviorSubject<any>(
    new Object
  );
  public readonly notification: Observable<
    string
  > = this._notification.asObservable();


  getEnrolleeList = () => {
    return this.http.get(API_URL + "/enrollees");
  }

  updateEnrollee = (id, data) => {
    return this.http.put(API_URL + "/enrollees/" + id, data);
  }

  public setNotification = notification => {
    this._notification.next(notification);
  };
}
