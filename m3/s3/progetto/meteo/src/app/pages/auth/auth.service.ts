import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAccessoDati } from './Modules/i-accesso-dati';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IRegister } from './Modules/register';
import { ILogin } from './Modules/login';
import { environment } from '../../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  authSubject = new BehaviorSubject<IAccessoDati|null>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.restoreUser()
  }


  registerUrl:string = environment.apiUrl + '/register';
  loginUrl:string = environment.apiUrl + '/login'



  signUp(data:IRegister):Observable<IAccessoDati>{
    return this.http.post<IAccessoDati>(this.registerUrl, data)
  }

  login(data:ILogin):Observable<IAccessoDati>{
    return this.http.post<IAccessoDati>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))


      this.autoLogout(data.accessToken)
    }))
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logout()
    },expMs)
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }


  restoreUser(){

    const userJson:string|null =  localStorage.getItem('accessData');
    if(!userJson) return;

    const accessData:IAccessoDati = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.authSubject.next(accessData)
    this.autoLogout(accessData.accessToken)
  }
}
