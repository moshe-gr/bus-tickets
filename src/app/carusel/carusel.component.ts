import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {

  @Input() date:object[];
  
  constructor() {
   }

  ngOnInit(): void {
  }
  
}
