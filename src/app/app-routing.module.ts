import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component'; 
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';



const routes: Routes = [

  // {path: '', component: HeaderComponent},
  {path: '', component: MainSectionComponent},
  {path: '', component: ProjectsSectionComponent},
  {path: '', component: AboutSectionComponent},
  {path: '', component: FooterComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
