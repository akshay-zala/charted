import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  classToggle: boolean = false;
  constructor() {}

  changeView(event: any) {
    this.classToggle = event.detail.checked;
  }
}
