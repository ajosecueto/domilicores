import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {md5} from '../../utils/md5';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  save = false;
  form: FormGroup;

  constructor(private loginService: LoginService, private snack: MatSnackBar, private dialog: MatDialogRef<ChangePasswordComponent>) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      new_password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      new_password2: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  /**
   * change password
   */
  changePassword(): void {
    if (this.form.valid) {
      const form = this.form.value;
      if (form.new_password !== form.new_password2) {
        this.snack.open('Las contraseñas no coinciden', 'CLOSE', {
          duration: 2000,
        });
        return;
      }
      form['password'] = md5(form.password);
      form['new_password'] = md5(form.new_password);
      this.loginService.changePassword(form).subscribe((data) => {
        if (!data.error) {
          this.snack.open('¡Contraseña actualziada', 'CLOSE', {
            duration: 2000,
          });
          this.dialog.close();
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

}
