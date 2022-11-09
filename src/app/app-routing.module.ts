import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhmedGuard } from './ahmed.guard';
import { GenderComponent } from './createAccount/gender/gender.component';
import { HomeComponent } from './createAccount/home/home.component';
import { Home2Component } from './createAccount/home2/home2.component';
import { TermsComponent } from './createAccount/terms/terms.component';
import { VerifyComponent } from './createAccount/verify/verify.component';
import { ComposeComponent } from './Gmail/compose/compose.component';
import { DraftComponent } from './Gmail/draft/draft.component';
import { InboxComponent } from './Gmail/inbox/inbox.component';
import { MainComponent } from './Gmail/main/main.component';
import { MessageComponent } from './Gmail/message/message.component';
import { NavComponent } from './Gmail/nav/nav.component';
import { SentComponent } from './Gmail/sent/sent.component';
import { SnoozedComponent } from './Gmail/snoozed/snoozed.component';
import { StarredComponent } from './Gmail/starred/starred.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnotherComponent } from './signIn/another/another.component';
import { ChooseComponent } from './signIn/choose/choose.component';
import { PasswordcheckComponent } from './signIn/passwordcheck/passwordcheck.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'stage2/:index',
    component: Home2Component,
  },
  { path: 'verify/:index', component: VerifyComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'another', component: AnotherComponent },
  { path: 'gender/:index', component: GenderComponent },
  { path: 'terms/:index', component: TermsComponent },
  { path: 'password/:mail', component: PasswordcheckComponent },
  {
    path: 'gmail/:detail/mail',
    component: InboxComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'gmail/:detail/mail', component: MainComponent },
      { path: ':detail/starred', component: StarredComponent },
      { path: ':detail/snoozed', component: SnoozedComponent },
      { path: ':detail/sent', component: SentComponent },
      { path: ':detail/draft', component: DraftComponent },
      {
        path: ':detail/message/:index',
        component: MessageComponent,
      },
      { path: ':detail/starred/message/:index', component: MessageComponent },
    ],
    canActivate: [AhmedGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
