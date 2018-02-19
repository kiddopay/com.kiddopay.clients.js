import { RoutesModule } from './routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/login/callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
