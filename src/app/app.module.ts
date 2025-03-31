import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginModule } from './pages/login/login.module';
import { ChatComponent } from './components/chat/chat.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { SearchComponent } from './components/search/search.component';
import { PublicationComponent } from './components/publication/publication.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    IntroComponent,
    ChatComponent,
    FriendsListComponent,
    SearchComponent,
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
