import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {server_url} from '../../utils/server';
import {UMessage} from '../../general/interfaces';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  /**
   * save token session
   * @param {string} username
   * @param {string} token
   * @param name
   * @param picture
   */
  public static saveSession(username: string, token: string, name: string, picture: string, as: number) {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('picture', picture);
    localStorage.setItem('as', as + '');
  }

  /**
   * delete token session
   * @return {boolean} if session was deleted
   */
  public static deleteSession(): boolean {
    if (localStorage.getItem('username')) {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      if (localStorage.getItem('socket')) {
        localStorage.removeItem('socket');
      }
      if (localStorage.getItem('name')) {
        localStorage.removeItem('name');
      }
      if (localStorage.getItem('picture')) {
        localStorage.removeItem('picture');
      }
      if (localStorage.getItem('as')) {
        localStorage.removeItem('as');
      }
      return true;
    }
    return false;
  }

  /**
   * get session's username
   * @return {string}
   */
  public static userSession(): string {
    if (localStorage.getItem('username')) {
      return localStorage.getItem('username');
    }
  }

  /**
   * get session's token
   * @return {string}
   */
  public static tokenSession(): string {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }
  }

  /**
   * get socket id
   * @return {string}
   */
  public static socketSession(): string {
    if (localStorage.getItem('socket')) {
      return localStorage.getItem('socket');
    }
  }

  /**
   * get name of user
   * @return {string}
   */
  public static nameSession(): string {
    if (localStorage.getItem('name')) {
      return localStorage.getItem('name');
    }
  }

  /**
   * get picture url
   * @return {string}
   */
  public static pictureSession(): string {
    if (localStorage.getItem('picture')) {
      return localStorage.getItem('picture');
    }
  }


  /**
   * get type of user
   * @return {string}
   */
  public static asSession(): string {
    if (localStorage.getItem('as')) {
      return localStorage.getItem('as');
    }
  }

  /**
   * make a login
   * @param {string} username
   * @param {string} password
   * @returns {Observable<Object>}
   */
  login(username: string, password: string) {
    return this.http.post<LoginData>(server_url + 'login/login/',
      {
        'username': username,
        'password': password
      }, {responseType: 'json'});
  }


  /**
   * change password
   * @param form
   * @return {Observable<Object>}
   */
  changePassword(form: any) {
    form['username'] = LoginService.userSession();
    form['token'] = LoginService.tokenSession();
    return this.http.post<UMessage<string>>(server_url + 'login/change_password/', form, {responseType: 'json'});
  }

  /**
   * if an user has access in specified route
   * @param {string} route
   * @return {Observable<Access>}
   */
  hasAccess(route: string) {
    return this.http.post<boolean>(server_url + 'login/hasAccess/',
      {
        'username': LoginService.userSession(),
        'token': LoginService.tokenSession(),
        'route': route
      }, {responseType: 'json'});
  }

  /**
   * validate if user is an admin
   * @return {Observable<Object>}
   */
  isAdmin() {
    return this.http.post<boolean>(server_url + 'login/is_admin/',
      {
        'username': LoginService.userSession(),
        'token': LoginService.tokenSession()
      }, {responseType: 'json'});
  }


  /**
   * validate if is an user
   * @return {Observable<Object>}
   */
  isAnUser() {
    return this.http.post<boolean>(server_url + 'login/is_user/',
      {
        'username': LoginService.userSession(),
        'token': LoginService.tokenSession()
      }, {responseType: 'json'});
  }

}


export interface Access {
  access: boolean;
  error: string;
}

export interface LoginData {
  error: string;
  session: Session;
}

export interface Session {
  token: string;
  username: string;
  picture: string;
  name: string;
  as: number;
  fecha: string;
}
