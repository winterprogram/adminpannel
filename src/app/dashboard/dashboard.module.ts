import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'
import { UserlistComponent } from './userlist/userlist.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MerchantdataComponent } from './merchantdata/merchantdata.component';
import { Angular2CsvModule } from 'angular2-csv';


@NgModule({
  declarations: [UserlistComponent, MerchantdataComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    Angular2CsvModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'merchantdata', component: MerchantdataComponent}
    ]),
    ToastrModule.forRoot()
  ]
})
export class DashboardModule { }
