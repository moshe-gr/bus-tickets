import { Injectable } from '@angular/core';
import { RideData } from '../models/ride-data';

@Injectable({
  providedIn: 'root'
})
export class RideDataService{
    depDate = new Date();
    info:RideData[] = [];
    STATES = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
    };
    STATES_NAMES = Object.values(this.STATES);
    STATES_LETTERS = Object.keys(this.STATES);
    OPERATORS = ['', 'assets/Metro_Transit.png',
        'assets/Ride_SMART.png',
        'assets/Westcat.png',
        'assets/citilink.png'];
    
    constructor() { 
        for (let i = 0; i < 100000; i++) {
            this.info.push({
                "date": this.depDate.getTime()+(30*60000*Math.floor(Math.random() * 2000)),
                "due": Math.floor(Math.random() * 15000000)+4000000,
                "operator": this.OPERATORS[Math.floor(Math.random() * 4) + 1],
                "busId": "GLI" + randomIntFromInterval(12000, 99999),
                "price": randomIntFromInterval(10, 40),
                "cheapest": true,
                "seats": randomIntFromInterval(15, 40),
                "source": this.STATES_LETTERS[randomIntFromInterval(0, this.STATES_LETTERS.length)],
                "dest": this.STATES_LETTERS[randomIntFromInterval(0, this.STATES_LETTERS.length)]
            });
        }
        this.info = this.info.sort((a, b) => a.price - b.price);
    }
}
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);