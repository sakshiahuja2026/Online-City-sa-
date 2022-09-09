import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  getAllUsers() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  userSignupApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9999/public/signup", user)
  }

  userLoginApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9999/public/login", user)
  }

  providerSignupApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9999/serviceprovider/signup", user)
  }

  providerLoginApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9999/serviceprovider/login", user)
  }

  uploadProfile(user: any): Observable<any> {
    return this.http.post("http://localhost:9999/serviceprovider/uploadprofile", user);
  }

  emailsend(email: any): Observable<any> {
    return this.http.post(environment.url + "public/otpsend", email)
  }
  checkotp(otpbean: any): Observable<any> {
    return this.http.post(environment.url + "public/otp", otpbean)
  }
  resetpassword(passwordbean: any): Observable<any> {
    return this.http.post(environment.url + "public/forgot", passwordbean)
  }
  getallUsers(): Observable<any> {
    return this.http.get(environment.url + "public/getallUsers")
  }
  getallSp(): Observable<any> {
    return this.http.get(environment.url + "serviceprovider/getallSp")
  }
  deleteUser(userId:any):Observable<any>{
    return this.http.delete(environment.url+ "public/delete/"+userId)
  }
  deleteProvider(providerId:any):Observable<any>{
    return this.http.delete(environment.url+"serviceprovider/delete/"+providerId)
  }
  approve(providerId:any):Observable<any>{
    return this.http.delete(environment.url+"serviceprovider/approve/"+providerId)
  }
}
