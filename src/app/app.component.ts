import { Component } from '@angular/core';
import { environment } from "../environments/environment"
import { UtilityService } from "./services/utility.service"
import { getURL } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  flag: boolean = true;
  constructor(
    private _utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.flag = false
  }
}
