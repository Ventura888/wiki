import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lat: number = 32.175078;
  lng: number = 34.909681;

  constructor() { }

  ngOnInit() {
  }

}
