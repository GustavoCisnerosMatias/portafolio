import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';
import { ChatComponent } from './chat/chat.component';
import { VideoBgComponent } from './shared/video-bg/video-bg.component';
import { HomeComponent } from './home/home.component';
import { WriteupHtbCapComponent } from './writeups/writeup-htb-cap/writeup-htb-cap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    TechnologiesComponent,
    CertificatesComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    SobreMiComponent,
    AnimateOnScrollDirective,
    ChatComponent,
    VideoBgComponent,
    HomeComponent,
    WriteupHtbCapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
