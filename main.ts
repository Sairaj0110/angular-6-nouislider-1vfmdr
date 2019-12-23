import './polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

import {NouisliderModule} from 'ng2-nouislider';
import {SliderOverviewExample} from './app/slider-overview-example';

@NgModule({
  exports: [
    NouisliderModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
  ],
  entryComponents: [SliderOverviewExample],
  declarations: [SliderOverviewExample],
  bootstrap: [SliderOverviewExample],
  providers: [
    DatePipe
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */