import { Component } from '@angular/core';
import { LocalNewsProvider } from '../../providers/localnewsProvider';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-localnews',
  templateUrl: 'local_news.html',
  providers: [LocalNewsProvider]
})
export class LocalNews {
  selectedItem: any;
  icons: string[];
  public entries: any  = []; /* this needs to be class level variable */
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public LocalNewsProvider: LocalNewsProvider ,public navCtrl: NavController, public navParams: NavParams) {
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
    ionViewDidLoad(){
    this.LocalNewsProvider.load().subscribe(
          data => {
              this.entries.push(data); /* push retrieved data into the array */
          }
      );
    }

 public openArticle(url: string) {
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LocalNews, {
      item: item
    });
  }
}
