import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RideData } from '../models/ride-data';

@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.css']
})
export class InfoRowComponent implements OnInit {
  @Input() info: RideData;
  currency = environment.currency;
  dueHour:number;
  dueMinute:number;
  
  constructor() {
    
   }

  ngOnInit(): void {
    this.dueHour = Math.floor(this.info.due/1000/60/60);
    this.dueMinute = Math.round((this.info.due/1000/60/60%1)*60);
  }

}