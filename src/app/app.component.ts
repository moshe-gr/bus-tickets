import { Component, OnInit } from '@angular/core';
import { RideData } from './models/ride-data';
import { RideDataService } from './services/ride-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  info: RideData[];
  carusel = [];
  table: RideData[] = [];
  dateSt: number;
  myInfo;

  rideInfo(myInfo): void{
    this.myInfo = myInfo;
    this.dateSt = new Date(myInfo.dateSt).getTime();
    this.search(this.myInfo);
  }

  prevNext(dateSt): void{
    this.dateSt = dateSt;
    this.search(this.myInfo);
  }
  
  search(myInfo): void{
    this.carusel = [
      {date: this.dateSt,
        price: null},
      {date: this.dateSt+(24*60*60*1000),
        price: null},
      {date: this.dateSt+(24*60*60*1000*2),
        price: null},
      {date: this.dateSt+(24*60*60*1000*3),
        price: null},
      {date: this.dateSt+(24*60*60*1000*4),
        price: null},
      {date: this.dateSt+(24*60*60*1000*5),
        price: null},
      {date: this.dateSt+(24*60*60*1000*6),
        price: null}
      ];
      this.table.length = 0;
      for(var i = 0; i < this.info.length; i++){
        if(myInfo.source == this.rideData.STATES[this.info[i].source] && myInfo.dest == this.rideData.STATES[this.info[i].dest] && this.dateSt <= this.info[i].date && this.dateSt+(24*60*60*1000*6) > this.info[i].date){
          if(this.table.length > 0 && this.info[i].price > this.table[0].price){
            this.info[i].cheapest = false;

          }
          this.table.push(this.info[i])
          for(let j = 0; j < this.carusel.length; j++){
            if(this.carusel[j].date <= this.info[i].date && this.carusel[j].date+(24*60*60*1000) > this.info[i].date && this.carusel[j].price == null){
              this.carusel[j].price = this.info[i].price;
            }
          }
        }
      }
      this.table = this.table.sort((a, b) => a.date - b.date);
  }
  constructor(private rideData: RideDataService){ }
  ngOnInit(): void{
    this.info = this.rideData.info;
   }
}
