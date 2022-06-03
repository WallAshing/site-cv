import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CVComponent} from "./cv/cv.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
    { path: '', redirectTo: '/cv', pathMatch: 'full'},
    { path: 'cv', component: CVComponent },
    { path: 'portfolio', component: PortfolioComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
