import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './cv/about-me/about-me.component';
import { HardSkillsComponent } from './cv/hard-skills/hard-skills.component';
import { FormationsExperiencesComponent } from './cv/formations-experiences/formations-experiences.component';
import { SoftSkillsLanguagesComponent } from './cv/soft-skills-languages/soft-skills-languages.component';
import { PointsOfInterestsComponent } from './cv/points-of-interests/points-of-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    HardSkillsComponent,
    FormationsExperiencesComponent,
    SoftSkillsLanguagesComponent,
    PointsOfInterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
