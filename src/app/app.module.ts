import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { FooterComponent } from './components/layout/footer/footer.component';

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
import {faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import {faInstagram as faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faWhatsapp as faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private library: FaIconLibrary) {
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
      faCoffee,
      faInstagram,
      faWhatsapp);
    }
}
