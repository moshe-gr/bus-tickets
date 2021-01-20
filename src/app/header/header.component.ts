import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RideDataService } from '../services/ride-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() rideInfo: EventEmitter<object> = new EventEmitter<object>();
  states;
  
search(myInfo): void{
  this.rideInfo.emit(myInfo);
}

  constructor(private rideData: RideDataService) {  }

  ngOnInit(): void {
    this.states = this.rideData.STATES_NAMES;
    }

}