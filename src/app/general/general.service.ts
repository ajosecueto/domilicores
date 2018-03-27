import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {City, MessageM} from './general';
import {server_url} from './server';

@Injectable()
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  /**
   * get cities
   * @returns {Observable<MessageM<City>>}
   */
  getCities(): Observable<MessageM<City>> {
    return this.http.post<MessageM<City>>(server_url + 'system/get_cities/', {}, {responseType: 'json'});
  }
}


