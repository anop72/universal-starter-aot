// the polyfills must be the first thing imported
import 'angular2-universal/polyfills';

// Angular 2
import {enableProdMode} from '@angular/core';

// enable prod for faster renders
enableProdMode();

import {ngApp} from './main.browser.aot';

// on document ready bootstrap Angular 2
document.addEventListener('DOMContentLoaded', () => {

  ngApp()

});
