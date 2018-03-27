import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../general/general.service';
import {City} from '../general/general';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  cities: City[];

  constructor(private generalService: GeneralService) {
  }

  ngOnInit() {
    this.getCities();
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
