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
      Url: this.formBuild.control(null),
      textarea: this.formBuild.control(null)
    });
  }


  send(){
    console.log(this.form.value);
    this.form.reset()
  }

  isValid(nomeDelCampo:string){
    return this.form.get(nomeDelCampo)?.valid
  }

  isTouched(nomeDelCampo:string){
    return this.form.get(nomeDelCampo)?.touched
  }

  isValidAndTouched(nomeDelCampo:string){
    return this.isValid(nomeDelCampo) && this.isTouched(nomeDelCampo)
  }

  isTheSame(password:string,confermaPassword:string){
    return this.form.get(password)?.value === this.form.get(confermaPassword)?.value
  }
}
