import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';

/* Font Awesome */
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faUsersCog} from '@fortawesome/free-solid-svg-icons/faUsersCog';
import {faUserClock} from '@fortawesome/free-solid-svg-icons/faUserClock';
import {faCommentDots} from '@fortawesome/free-solid-svg-icons/faCommentDots';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons/faBusinessTime';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons/faChevronCircleLeft';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faInstagram as faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faWhatsapp as faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';

/* Components */
import {AppComponent} from '@app/app.component';
import {LayoutComponent} from '@components/layout/layout.component';
import {HomeComponent} from '@components/home/home.component';
import {HeaderComponent} from '@components/layout/header/header.component';
import {ContentComponent} from '@components/layout/content/content.component';
import {FooterComponent} from '@components/layout/footer/footer.component';

/* Services */
import {LayoutService} from '@services/layout.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [
    LayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public library: FaIconLibrary) {
    library.addIcons(faHome,
      faEnvelope,
      faUsers,
      faUsersCog,
      faUserClock,
      faCommentDots,
      faBusinessTime,
      faUser,
      faComment,
      faPaperPlane,
      faPaperPlane,
      faChevronCircleLeft,
      faChevronCircleRight,
      faCheck,
      faPhone,
      faInstagram,
      faWhatsapp);
    }
}
