import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework-info',
  templateUrl: './framework-info.component.html',
  styleUrls: ['./framework-info.component.css']
})
export class FrameworkInfoComponent implements OnInit {
  title = 'angular-base';

  constructor() {}

  ngOnInit(): void {
  }

}
