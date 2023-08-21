export const environment = {
  production: true,
  client: {
    templateUrl: "home.page.html",
    appId: "io.ionic.bitla",
    appName: 'Bitla'
  },
};

export function getURL(): string {
  return environment.client.templateUrl;
}