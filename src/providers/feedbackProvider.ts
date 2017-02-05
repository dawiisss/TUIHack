import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

 
@Injectable()
export class feedbackProvider {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getfeedbacks(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://178.62.44.124:27027/api/feedback')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  addFeedback(feedback){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://178.62.44.124:8080/api/feedback', JSON.stringify(feedback), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
  }
  }