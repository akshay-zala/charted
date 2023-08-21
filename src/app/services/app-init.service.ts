import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { environment } from 'src/environments/environment';
import { getURL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppInitService {
  BASE_URL_1 = "https://www.morningstartravels.in/api/angular_meta_app.json?&device_id=";
  BASE_URL_2 = "https://www.charteredbus.in/api/angular_meta_app.json?&device_id=";
  constructor(
    private _utilityService: UtilityService,
    private http: HttpClient
  ) {}

  /** @note update Environment variable dynamically on 'APP_INITIALIZER' */
  getClient() {
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.BASE_URL_1).subscribe((response: any) => {
        if (response[0]['subdomain']=== 'cbus') {
          environment.client.templateUrl = 'home-page-theme-1.html';
          environment.client.appId = 'io.ionic.charted';
          environment.client.appName = 'Charted';
        } else {
          environment.client.templateUrl = 'home-page-theme-2.html';
          environment.client.appId = 'io.ionic.bitla';
          environment.client.appName = 'Bitla';
        }
        console.log("environment : ", environment);
        resolve();
      })
    });
  }
}
