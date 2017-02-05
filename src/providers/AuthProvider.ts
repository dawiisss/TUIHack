import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthProvider {
  currentUser: User;
  data : any;
  email : string;
  name : string;
  constructor(public http: Http){
    this.data = null;
    this.name = null;
    this.email = null;    
  }
  
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert email/password!");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        //let access = (credentials.password === this.data.password && credentials.email === this.email);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
       this.http.post('http://178.62.44.124:8080/login', JSON.stringify(credentials), {headers: headers})
       .subscribe(res => {
        console.log(res.json());
        this.data = res.json();
        this.email = this.data.email;
        this.name = this.data.firstname;
        console.log(this.name);
        console.log(this.email);
        localStorage.setItem("name", this.name)
        localStorage.setItem("email", this.email)
      });        
        ///'///////////
        if(localStorage.getItem("email") == null) {  
          console.log(localStorage.getItem("email"));
          
        } else {
        this.currentUser = new User(localStorage.getItem("name"), localStorage.getItem("email"));
        observer.next(headers);
        observer.complete();
        }
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert all the details!");
    } else {
      // At this point store the credentials to your backend!
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://178.62.44.124:8080/api/users', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}