// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const client2 = {
  templateUrl: "home-page-theme-2.html",
  appId: "io.ionic.bitla",
  appName: 'Bitla',
}

const client1 = {
    templateUrl: "home-page-theme-1.html",
    appId: "io.ionic.charted",
    appName: 'Charted',
}
export const environment = {
  production: false,
  client: client2
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
