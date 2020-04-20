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
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
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

library.add(faHome);
library.add(faEnvelope);
library.add(faUsers);
library.add(faUsersCog);
library.add(faUserClock);
library.add(faCommentDots);
library.add(faBusinessTime);
library.add(faUser);
library.add(faComment);
library.add(faPaperPlane);


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
export class AppModule { }
