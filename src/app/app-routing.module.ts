import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { MailComponent } from './mail/mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import {JunkComponent } from './junk/junk.component';
import {ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent} ,
  { path: 'update', component: UpdateComponent},
  { path: 'mail', component: MailComponent, children: [
    {path: 'inbox', component: InboxComponent},
    {path: 'sent', component: SentComponent},
    {path: 'junk', component: JunkComponent}
  ]},
  {path:'parent', component: ParentComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
