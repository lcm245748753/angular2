import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class InspectorService {

  constructor(private http: HttpClient) {
  }

  // 系统信息
  getInfo() {

  }

  // 环境信息
  getEnv() {
    return new Observable(observer => {
      this.http.get('http://127.0.0.1:8080/env').subscribe(data => {
        observer.next(this.convertObjectNzTreeData(0, 0, data));
      });
    });
  }

  private convertObjectNzTreeData(id, parent, object) {
    var result = [];
    for (var name in object) {
      var value = object[name];
      var children = value === Object(value) && Object.prototype.toString.call(value) !== '[object Array]'

      if (children) {
        result.push({
          id: id++,
          name: name,
          level: parent,
          children: this.convertObjectNzTreeData(id, parent + 1, value)
        });
      } else {
        result.push({id: id++, name: name, level: parent, value: value});
      }
    }
    return result;
  }

}
