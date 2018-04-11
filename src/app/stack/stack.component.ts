import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

declare var $: any;

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  technologies: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData('technologies')
      .subscribe(data => {
        this.technologies = data;
      });
  }
}
