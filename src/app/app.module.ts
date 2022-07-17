import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TestComponentComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    NotFoundComponent,
    HomeComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
