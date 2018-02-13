import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts()
      .subscribe(data => {
        this.posts = data;
      });
  }

}
