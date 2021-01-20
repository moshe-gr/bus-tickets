import { Component, Input, OnInit } from '@angular/core';
import { RideData } from '../models/ride-data';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})


export class InfoTableComponent implements OnInit {
    @Input() tableData: RideData[];

  constructor() { }

  ngOnInit(): void {  }

}
