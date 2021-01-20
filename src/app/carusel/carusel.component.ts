import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {

  @Input() date;
  @Output() newDate: EventEmitter<number> = new EventEmitter<number>();
  prev(){
    this.newDate.emit(this.date[0].date-(1000*60*60*24*7))
  }
  next(){
    this.newDate.emit(this.date[this.date.length-1].date+(1000*60*60*24))
  }
  
  constructor() {
   }

  ngOnInit(): void {
  }
  
}
