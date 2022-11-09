import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './createAccount/home/home.component';
import { Home2Component } from './createAccount/home2/home2.component';
import { ChooseComponent } from './signIn/choose/choose.component';
import { AnotherComponent } from './signIn/another/another.component';
import { PasswordcheckComponent } from './signIn/passwordcheck/passwordcheck.component';
import { InboxComponent } from './Gmail/inbox/inbox.component';
import { TermsComponent } from './createAccount/terms/terms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './Gmail/nav/nav.component';
import { AsideComponent } from './Gmail/aside/aside.component';
import { MainComponent } from './Gmail/main/main.component';
import { TopComponent } from './Gmail/top/top.component';
import { StarredComponent } from './Gmail/starred/starred.component';
import { SnoozedComponent } from './Gmail/snoozed/snoozed.component';
import { VerifyComponent } from './createAccount/verify/verify.component';
import { GenderComponent } from './createAccount/gender/gender.component';
import { ComposeComponent } from './Gmail/compose/compose.component';
import { SentComponent } from './Gmail/sent/sent.component';
import { DraftComponent } from './Gmail/draft/draft.component';
import { MessageComponent } from './Gmail/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    ChooseComponent,
    AnotherComponent,
    PasswordcheckComponent,
    InboxComponent,
    TermsComponent,
    NotFoundComponent,
    NavComponent,
    AsideComponent,
    MainComponent,
    TopComponent,
    StarredComponent,
    SnoozedComponent,
    VerifyComponent,
    GenderComponent,
    ComposeComponent,
    SentComponent,
    DraftComponent,
    MessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
