import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {ArrayLearningComponent} from './pages/array/array-learning.component';
import {RootComponent} from './pages/root/root.component';
import {TypicodePostsComponent} from './pages/typicode-posts/typicode-posts.component';
import {HttpClientModule} from "@angular/common/http";
import {HashingComponent} from './pages/hashing/hashing.component';
import {FormComponent} from './pages/form/form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    WelcomeComponent,
    ArrayLearningComponent,
    RootComponent,
    TypicodePostsComponent,
    HashingComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
