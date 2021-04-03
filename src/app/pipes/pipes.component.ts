import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fname = 'John'
  lname = 'Doe'
  msg = "hello from angular"
  fullName = "John Doe"
  birthday = new Date(1993, 3, 6)

}
