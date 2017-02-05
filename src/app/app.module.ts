import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BookHotel } from '../pages/book_hotel/book_hotel';
import { BookedExcursions } from '../pages/booked_excursions/booked_excursions';
import { BookingInfo } from '../pages/booking_info/booking_info';
import { EditProfile } from '../pages/edit_profile/edit_profile';
import { Excursions } from '../pages/excursions/excursions';
import { Feedback } from '../pages/feedback/feedback';
import { Home } from '../pages/home/home';
import { LocalNews } from '../pages/local_news/local_news';
import { RoomService } from '../pages/room_service/room_service';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Profile } from '../pages/profile/profile';
import { AuthProvider } from '../providers/AuthProvider';
import { QRCode } from '../pages/qrcode/qrcode';

@NgModule({
  declarations: [
    MyApp,
    BookHotel,
    BookedExcursions,
    BookingInfo,
    EditProfile,
    Excursions,
    Feedback,        
    Home,
    LocalNews,
    RoomService,
    Login,
    Signup,
    QRCode,
    Profile
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookHotel,
    BookedExcursions,
    BookingInfo,
    EditProfile,
    Excursions,
    Feedback,        
    Home,
    LocalNews,
    RoomService,
    Login,
    Signup,
    QRCode,
    Profile
  ],
  providers: [AuthProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
