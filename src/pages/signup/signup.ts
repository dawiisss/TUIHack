import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/AuthProvider';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {
  createSuccess = false;
  registerCredentials = {email: '', password: '',firstname: '',lastname: '', addressline1: '', addressline2: '',postcode: '',phonenumber:'',usertype:'user'};
  selectedItem: any;

  constructor(public alertCtrl: AlertController,public auth: AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


}

  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.navCtrl.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
}
