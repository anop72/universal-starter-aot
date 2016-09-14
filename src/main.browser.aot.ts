
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

export function ngApp() {
  return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
}
