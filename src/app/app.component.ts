import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  resultado = '';

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  onClick(): void {
    if (this.form.valid) {
      this.resultado = 'Hola te has loggeado: ' + this.form.value.username;
    } else {
      this.resultado = 'Formulario invalido';
    }
  }


}
