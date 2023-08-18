import { Component } from '@angular/core';
import { environment } from "../environments/environment"
import { UtilityService } from "./services/utility.service"

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
    this._utilityService.clientAPICall(2).subscribe((res: any) => {
      console.log("res : ", res);
      if (res[0]['subdomain']=== 'cbus') {
        this._utilityService.setClient(environment.client2);
      } else {
        this._utilityService.setClient(environment.client1);
      }
    }, (error: any) => {
      console.log("error : ", error);
    })
  }
}
