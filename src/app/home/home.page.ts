import { Component } from '@angular/core';
import { environment } from "../../environments/environment"
import { UtilityService } from "../services/utility.service"
import { getURL } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: getURL(),
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  classToggle: boolean = false;
  client: any;
  constructor(
    private _utilityService: UtilityService
  ) {
    console.log("HomePage constructor called");
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
