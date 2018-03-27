import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../general/general.service';
import {City} from '../general/general';
import {Mobile} from './services/mobile';
import {MobileService} from './services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  cities: City[];
  mobiles: Mobile[];
  find = '';

  constructor(private generalService: GeneralService, private  mobileService: MobileService) {
  }

  ngOnInit() {
    this.getCities();
    this.getMobiles();
  }

  getMobiles(): void {
    this.mobileService.getMobiles().subscribe((data) => {
      if (!data.error) {
        this.mobiles = data.data;
      } else {
        console.log('error ' + data.error);
      }
    }, (error) => {
      console.log('error');
    });
  }

  getCities(): void {
    this.generalService.getCities().subscribe((data) => {
      if (!data.error) {
        this.cities = data.data;
      } else {
        console.log('error');
      }
    }, (error) => {
      console.log('error');
    });
  }

}
