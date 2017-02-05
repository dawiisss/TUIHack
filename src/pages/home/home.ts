import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/AuthProvider';

import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { BookHotel } from '../book_hotel/book_hotel'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  username = '';
  email = '';
  constructor(public auth: AuthProvider,public navCtrl: NavController) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;

  }

  goToBookings(){
    this.navCtrl.push(BookHotel);

  }



  public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(Login)
    });
  }
  }


