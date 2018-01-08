import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  newStuff = [1,2,3,4]

  select(){
    console.log('clicked')
  }

  ngOnInit() {
  }

}
