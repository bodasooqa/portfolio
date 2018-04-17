import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name: string;
  public email: string;
  public subject: string;
  public text: string;

  constructor() { }

  ngOnInit() {
  }

}
