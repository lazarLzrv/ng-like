import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ResultsComponent } from './results/results.component';
import { PostsComponent } from './posts/posts.component';
import { UserDataService } from './user-data.service';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ResultsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserDataService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
