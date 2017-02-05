import { Component,ViewChild, ElementRef } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;
@Component({
  selector: 'page-local_info',
  templateUrl: 'local_info.html'
})

export class LocalInfo {
   @ViewChild('map') mapElement: ElementRef;
  map: any;
  

  constructor(public navCtrl: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    // If we navigated to this page, we will have an item available as a nav param
  }
    ionViewLoaded(){
    this.loadMap();
  }
 
 loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }
 
}