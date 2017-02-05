import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';


@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html'
})
export class QRCode {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

click() {
BarcodeScanner.scan()
.then((result) => {
if (!result.cancelled) {
//const barcodeData = new BarcodeData(result.text, result.format);
alert(result.text);
}
})
.catch((err) => {
alert(err);
})
}

  slides = [
    {
      title: "Welcome to the QRCode Check-in System!",
      description: "The <b>QR System</b> allows you to scan a QR code to check-in to the hotel.",
      //image: "assets/img/qrcode-img-1.png",
    },
    {
      title: "How does it work?",
      description: "<b>Find</b> a QR Code at the hotels reception desk.",
      //image: "assets/img/qrcode-img-2.png",
    },
    {
      title: "What then?",
      description: "Then you scan the code and it will take you to a confirmation page for check-in.",
      //image: "assets/img/qrcode-img-3.png",
    }
  ];

}
