import { Component } from '@angular/core';
import { environment } from "../../environments/environment"
import { UtilityService } from "../services/utility.service"

@Component({
  selector: 'app-home',
  templateUrl: environment.client1.templateUrl,
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  classToggle: boolean = false;
  client: any;
  constructor(
    private _utilityService: UtilityService
  ) {
    // this._utilityService.getClient().subscribe((res: any) => {
    //   console.log("_utilityService res : ", res);
    // }, (error: any) => {
    //   console.log("_utilityService error : ", error);
    // })
  }

  ionViewDidEnter() { }

  changeView(event: any) {
    this.classToggle = event.detail.checked;
  }
}

// @Component({
//   selector: 'home-page-theme-1',
//   templateUrl: './home-page-theme-1.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePageTheme1 {
//   constructor() {}
// }

// @Component({
//   selector: 'home-page-theme-2',
//   templateUrl: './home-page-theme-2.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePageTheme2 {
//   constructor() {}
// }
