import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IRegister } from '../Modules/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  registerData:IRegister = {
    email: '',
    password: '',
    nome: ''
  }


  save(){
    this.authSvc.signUp(this.registerData)
    .subscribe(data => {
        this.router.navigate(['/auth/login'])
    })
  }
}
