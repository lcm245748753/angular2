import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var route = activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }

        if (this.tabs.indexOf(route.routeConfig) === -1) {
          this.tabs.push(route.routeConfig);
          this.activeTabIndex = this.tabs.length - 1;
        }
        title.setTitle(route.routeConfig.data.name)
      }
    });
  }

  closeTab(route) {
    this.tabs.splice(this.tabs.indexOf(route), 1);
  }

  menus = [
    {
      name: '系统信息',
      menus: [
        {name: '版本信息', link: '/system/info'},
        {name: '环境信息', link: '/system/env'}
      ]
    },
    {
      name: '系统状态',
      menus: [
        {name: '版本信息1', link: '/system/info'},
        {name: '环境信息2', link: '/system/env'}
      ]
    },
    {
      name: '演示',
      menus: [
        {name: '查询列表演示', link: '/demo/search'}
      ]
    }
  ];
  activeMenu = this.menus[0];

  activeTabIndex = 0;
  tabs = [];

  switchMenu(menu) {
    this.activeMenu = menu;
  };
}
