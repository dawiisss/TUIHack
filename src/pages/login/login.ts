import { Component } from '@angular/core';
import { NavController,AlertController, LoadingController,Loading, NavParams } from 'ionic-angular';
import { Signup } from '../signup/signup'
import { Home } from '../home/home';
import { AuthProvider } from '../../providers/AuthProvider';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  loading: Loading;
  registerCredentials = {email: '', password: ''};
  selectedItem: any;

//Begin constructor
 constructor(public auth: AuthProvider ,public alertCtrl: AlertController, public loadingCtrl: LoadingController ,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }
//End constructor

//Create account push to page function
createAccountPage(){
  this.navCtrl.push(Signup);
}
/// End

//Login function
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.navCtrl.setRoot(Home)
        });
      } else {
        this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}


