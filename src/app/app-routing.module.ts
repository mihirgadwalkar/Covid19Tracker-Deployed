import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HelplineComponent } from './components/helpline/helpline.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SafetyComponent } from './components/safety/safety.component';


const routes: Routes = [
  { path:'homepage' , component : HomepageComponent},
  { path:'home', component:HomeComponent },
  { path:'countries', component:CountriesComponent },
  { path:'helplines' ,component:HelplineComponent},
  { path:'safety' ,component: SafetyComponent},
  { path:'', redirectTo:"/homepage",pathMatch:"full"},
  { path:'**', redirectTo:'',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
