import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.pug',
  styleUrls: ['./search.component.css']
})
export class SearchDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  form: FormGroup;

  ngOnInit() {
    console.log('init');
    this.form = this.formBuilder.group({
      username: [null, []],
      password: [null, []],
    });

    var init = false;
    this.route.queryParams.subscribe(value => {
      if (!init) {
        init = true;
        this.form.setValue(value);
      }

      // TODO 查询数据
      console.log('do real search');
    });


  }

  search() {
    console.log('form value', this.form.value);
    this.router.navigate(['/demo/search'], {queryParams: this.form.value});
  }

}
