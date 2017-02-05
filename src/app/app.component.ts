import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { BookHotel } from '../pages/book_hotel/book_hotel';
import { BookingInfo } from '../pages/booking_info/booking_info';
import { Excursions } from '../pages/excursions/excursions';
import { Feedback } from '../pages/feedback/feedback';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { LocalInfo } from '../pages/local_info/local_info';
import { RoomService } from '../pages/room_service/room_service';
import { Profile } from '../pages/profile/profile';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //Root page & active page highlight
  rootPage: any = Login;
  activatePage: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    //Navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'My Profile', component: Profile },
      { title: 'Book Hotel', component: BookHotel },
      { title: 'Room Service', component: RoomService },
      { title: 'Local Info', component: LocalInfo },
      { title: 'Excursions', component: Excursions },
      { title: 'Feedback', component: Feedback },                  
    ];
    this.activatePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activatePage = page;
  }

  checkActive(page){
    return page == this.activatePage;

  }
}
