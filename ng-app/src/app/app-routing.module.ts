import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SystemInfoComponent} from "./system/info/info.component";
import {SystemEnvComponent} from "./system/env/env.component";
import {SearchDemoComponent} from "./demo/search/search.component";

const routes: Routes = [
  {path: 'system/info', component: SystemInfoComponent, data: {name: '版本信息'}},
  {path: 'system/env', component: SystemEnvComponent, data: {name: '环境信息'}},
  {path: 'demo/search', component: SearchDemoComponent, data: {name: '列表演示'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
