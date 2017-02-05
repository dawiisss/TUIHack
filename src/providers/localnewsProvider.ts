import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LocalNewsProvider {

  constructor(public http: Http) {
    console.log('LocalNewsProvider loded');
  }


  load() {

        return Observable.create(s => {

        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%20from%20rss%20where%20url%3D%22http://fetchrss.com/rss/58812b7e8a93f853627b23c690881597185.xml%3Fformat%3Dxml%22&format=json&diagnostics=true&callback=')
        .map(res => res.json()) /* map res obj to json obj */ 
        .subscribe(data => {
           console.log(data);
           var items = data.query.results.item;
           items.forEach(i=>s.next(i));
           s.complete();
        });
      });
 }

}