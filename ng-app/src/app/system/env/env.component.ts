import {Component, OnInit} from '@angular/core';
import {InspectorService} from "../../service/inspector.service";

@Component({
  selector: 'app-system-env',
  templateUrl: './env.component.pug',
  styleUrls: ['./env.component.scss']
})

export class SystemEnvComponent implements OnInit {

  constructor(private inspector: InspectorService) {
  }

  data;
  expandDataCache = {};

  collapse(array, data, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object) {
    const stack = [];
    const array = [];
    const hashMap = {};
    stack.push({...root, level: 0, expand: false});

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({...node.children[i], level: node.level + 1, expand: false, parent: node});
        }
      }
    }

    return array;
  }

  visitNode(node, hashMap: object, array): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.inspector.getEnv().subscribe(env => {
      this.data = env;
      this.data.forEach(item => {
        this.expandDataCache[item.id] = this.convertTreeToList(item);
      });
    });
  }

}
