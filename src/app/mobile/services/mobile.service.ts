import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City, MessageM} from '../../general/general';
import {server_url} from '../../general/server';
import {Observable} from 'rxjs/Observable';
import {Mobile} from './mobile';

@Injectable()
export class MobileService {

  constructor(private http: HttpClient) { }

  /**
   * Se traen todos los datos de los moviles
   * @returns {Observable<MessageM<Mobile>>}
   */
  getMobiles(): Observable<MessageM<Mobile>> {
    return this.http.post<MessageM<Mobile>>(server_url + 'mobile/get_mobiles/', {}, {responseType: 'json'});
  }

}
