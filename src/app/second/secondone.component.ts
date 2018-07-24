import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondone',
  template: `
  <div class="row">
  <div class="col-md-12">
  <p>hello text from second child<p>
    <a [routerLink]="['three']"> click me</a>
  </div>
</div>

  `,
  styles: []
})
export class SecondoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
