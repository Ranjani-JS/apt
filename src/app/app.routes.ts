
import { Routes } from '@angular/router';
import { AptHomepageComponent } from './apt-homepage/apt-homepage.component';
import { AptAboutpageComponent } from './apt-aboutpage/apt-aboutpage.component';
import { AptVideopageComponent } from './apt-videopage/apt-videopage.component';
import { AptContactpageComponent } from './apt-contactpage/apt-contactpage.component';
import { AptProductpageComponent } from './apt-productpage/apt-productpage.component';
import { AptAwardpageComponent } from './apt-awardpage/apt-awardpage.component';

export const routes: Routes = [
    {path:''     , component: AptHomepageComponent},
    {path:'home' , component: AptHomepageComponent},
    {path:'about', component: AptAboutpageComponent},
    {path:'video', component: AptVideopageComponent},
    {path:'contact', component: AptContactpageComponent},
    {path:'product', component: AptProductpageComponent},
    {path:'award', component: AptAwardpageComponent}
];
