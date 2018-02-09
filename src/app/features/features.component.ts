import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setOtherColor(elem) {
    setTimeout(() => elem.children[0].children[0].style.color = '#007bff', 100);
  }

  setColor(elem) {
    elem.children[0].children[0].style.color = '#fff';
    setTimeout(this.setOtherColor(elem), 2000);
  }
}
