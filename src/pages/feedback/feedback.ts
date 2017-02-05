import { Component } from '@angular/core';

import { NavController,ModalController, ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { feedbackProvider } from '../../providers/feedbackProvider';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
  providers: [feedbackProvider]
})
export class Feedback 
{
subject: any;
description:any;
feedback:any;
name: any;
email: any;
date: any;

 constructor(public toastCtrl: ToastController,public viewCtrl: ViewController, public nav: NavController, public feedbackProvider: feedbackProvider, public modalCtrl: ModalController) {
}
ionViewDidLoad(){
 
    this.feedbackProvider.getfeedbacks().then((data) => {
      console.log(data);
      this.feedback = data;
    });
 
  }
 
  logForm() {
        let feedbackMain = {
      subject: this.subject,
      description: this.description,
      date: new Date().toLocaleString(),
      user: localStorage.getItem("email")

    };
    console.log(feedbackMain);
        if(feedbackMain){
          //this.reviews.push(review);
          this.feedbackProvider.addFeedback(feedbackMain);
          let toast = this.toastCtrl.create({
            message: 'Feedback has been sent! Thank you',
            duration: 3000
          });
          toast.present();
            };
        
  }
 
  deleteReview(feedback){
 
    //Remove locally
      let index = this.feedback.indexOf(feedback);
 
      if(index > -1){
        this.feedback.splice(index, 1);
      }   
 
    //Remove from database
    this.feedback.deleteReview(feedback._id);
  }
 
}