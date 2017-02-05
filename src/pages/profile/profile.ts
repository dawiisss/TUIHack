import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/AuthProvider';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  username = '';
  email = '';

  constructor(public auth: AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Profile, {
      item: item
    });
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(Login)
    });
  }

}
