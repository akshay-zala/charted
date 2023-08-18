import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  BASE_URL_1 = "https://www.morningstartravels.in/api/angular_meta_app.json?&device_id=";
  BASE_URL_2 = "https://www.charteredbus.in/api/angular_meta_app.json?&device_id=";

  subject$ = new Subject();
  constructor(
    private http: HttpClient
  ) { }

  clientAPICall(clientNumber: number) {
    if (clientNumber === 1) { return this.http.get(this.BASE_URL_1); }
    else { return this.http.get(this.BASE_URL_2); }
  }

  setClient(value: any) {
    this.subject$.next(value);
  }

  getClient() {
    return this.subject$;
  }
}
