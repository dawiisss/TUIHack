import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
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

 constructor(public viewCtrl: ViewController, public nav: NavController, public reviewService: feedbackProvider, public modalCtrl: ModalController) {
}
ionViewDidLoad(){
 
    this.reviewService.getfeedbacks().then((data) => {
      console.log(data);
      this.feedback = data;
    });
 
  }
 
  addfeedback(){
 
    let modal = this.modalCtrl.create(Feedback);
 
    modal.onDidDismiss(feedback => {
      if(feedback){
        this.feedback.push(feedback);
        this.feedback.createReview(feedback);        
      }
    });
 
    modal.present();
 
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