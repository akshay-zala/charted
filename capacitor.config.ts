import { CapacitorConfig } from '@capacitor/cli';
import { environment } from "./src/environments/environment"

const config: CapacitorConfig = {
  appId: environment.client.appId,
  appName: environment.client.appName,
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
