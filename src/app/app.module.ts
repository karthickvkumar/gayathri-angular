import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MailComponent } from './mail/mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { HeaderComponent } from './header/header.component';
import { SentComponent } from './sent/sent.component';
import { JunkComponent } from './junk/junk.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdateComponent,
    PageNotFoundComponent,
    MailComponent,
    InboxComponent,
    HeaderComponent,
    SentComponent,
    JunkComponent,
    ParentComponent,
    ChildrenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
