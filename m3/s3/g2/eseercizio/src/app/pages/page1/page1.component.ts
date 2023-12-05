import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  form!:FormGroup;

  generi:string[] = [
    "uomo",
    "donna",
    "non definito"
  ];

  constructor(private formBuild:FormBuilder) {}

  ngOnInit(){
    this.form = this.formBuild.group({
      nome: this.formBuild.control(null,[Validators.required]),
      cognome: this.formBuild.control(null,[Validators.required]),
      autenticazione: this.formBuild.group({
        username: this.formBuild.control(null,[Validators.required]),
        password: this.formBuild.control(null,[Validators.required]),
        confermaPassword: this.formBuild.control(null,[Validators.required])
      }),
      genere: this.formBuild.control(null),
      file: this.formBuild.control(null),
      textarea: this.formBuild.control(null)
    });
    }
}
