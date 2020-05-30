import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './userauth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { UserlistComponent } from './dashboard/userlist/userlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Angular2CsvModule } from 'angular2-csv';
import { MerchantComponent } from './dashboard/merchant/merchant.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Angular2CsvModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'merchant', component: UserlistComponent },
      { path: '', redirectTo: 'merchant', pathMatch: 'full' },
      { path: 'userlist', component: MerchantComponent }
    ]),
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
