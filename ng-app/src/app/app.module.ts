import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './/app-routing.module';
import {SystemInfoComponent} from './system/info/info.component';
import {SystemEnvComponent} from './system/env/env.component';
import {RouteReuseStrategy, RouterModule} from "@angular/router";
import {TreeTableModule} from "ng-treetable";
import {SimpleRouteReuseStrategy} from "./router/simple-route-reuse-strategy";
import { SearchDemoComponent } from './demo/search/search.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SystemInfoComponent,
    SystemEnvComponent,
    SearchDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    TreeTableModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: RouteReuseStrategy, useClass: SimpleRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
