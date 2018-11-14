import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";

export class SimpleRouteReuseStrategy implements RouteReuseStrategy {

  private static waitDelete: string;
  public static handlers: { [key: string]: DetachedRouteHandle } = {};

  public static routes: ActivatedRouteSnapshot[] = [];

  constructor() {
    //console.log('new SimpleReuseStrategy');
  }

  /** 所有路由允许复用 */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    //console.log('shouldDetach', route);
    return true;
  }

  /** 按path作为key存储路由快照&组件当前实例对象 */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (SimpleRouteReuseStrategy.waitDelete && SimpleRouteReuseStrategy.waitDelete == this.getRouteUrl(route)) {
      // 如果待删除是当前路由则不存储快照
      SimpleRouteReuseStrategy.waitDelete = null;
      return;
    }
    //console.log('store');
    SimpleRouteReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
    if (SimpleRouteReuseStrategy.routes.indexOf(route) == -1) {
      SimpleRouteReuseStrategy.routes.push(route);
    }
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!SimpleRouteReuseStrategy.handlers[this.getRouteUrl(route)]
  }

  /** 从缓存中获取快照，若无则返回nul */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    //console.log('retrieve', route.routeConfig);
    if (!route.routeConfig) {
      return null;
    }

    return SimpleRouteReuseStrategy.handlers[this.getRouteUrl(route)];
  }

  /** 进入路由触发，判断是否同一路由 */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    //console.log('result', future.routeConfig, current.routeConfig);
    return future.routeConfig === current.routeConfig && JSON.stringify(future.params) == JSON.stringify(current.params);
  }

  public static deleteRouteSnapshot(name: string): void {
    if (SimpleRouteReuseStrategy.handlers[name]) {
      delete SimpleRouteReuseStrategy.handlers[name];
    } else {
      SimpleRouteReuseStrategy.waitDelete = name;
    }
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {
    return route['_routerState'].url.replace(/\//g, '_');
  }
}
