import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {md5} from '../utils/md5';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('popOverState', [
        state('show', style({
          opacity: 1
        })),
        state('hide', style({
          opacity: 0
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('1000ms ease-out')),
      ]
    )
  ]
})
export class LoginComponent implements OnInit {
  form;
  show = false;

  constructor(private loginService: LoginService, private snack: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

  onClick(form) {
    if (this.form.valid) {
      this.loginService.login(form.usuario, md5(form.password)).subscribe((data) => {
        if (!data.error) {
          this.snack.open('¡Bienvenido ' + form.usuario + '!', 'CLOSE', {
            duration: 2000,
          });
          LoginService.saveSession(data.session.username, data.session.token, data.session.name, data.session.picture, data.session.as);
          if (data.session.as === 0) {
            this.router.navigate(['main']);
          } else {
            this.router.navigate(['dashboard']);
          }
        } else {
          this.snack.open(data.error, 'CLOSE', {
            duration: 5000,
          });
        }
      }, (error2) => {
        this.snack.open(error2.message, 'CLOSE', {
          duration: 5000,
        });
      });
    } else {
      this.snack.open('Lo campos son obligatorios', 'CLOSE', {
        duration: 2000,
      });
    }
  }

  colombia(index: number): void {
    this.snack.open(index + '', 'CLOSE', {
      duration: 2000,
    });
  }

}
