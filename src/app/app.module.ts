import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from './category/category.component';
import { MonthComponent } from './month/month.component';
import { ComeComponent } from './come/come.component';
import { BottomComponent } from './bottom/bottom.component';
import {FormsModule} from '@angular/forms';
import { CurrencyPipe } from './currency.pipe';
import { Currency1Pipe } from './currency1.pipe';
import { Currency2Pipe } from './currency2.pipe';
import { Currency3Pipe } from './currency3.pipe';
import { ExchagePipe } from './exchage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MiddleComponent,
    WelcomeComponent,
    CategoryComponent,
    MonthComponent,
    ComeComponent,
    BottomComponent,
    CurrencyPipe,
    Currency1Pipe,
    Currency2Pipe,
    Currency3Pipe,
    ExchagePipe
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
