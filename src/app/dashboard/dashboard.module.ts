import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'
import { UserlistComponent } from './userlist/userlist.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Angular2CsvModule } from 'angular2-csv';
import { MerchantComponent } from './merchant/merchant.component';


@NgModule({
  declarations: [UserlistComponent, MerchantComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    Angular2CsvModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
       { path: 'merchant', component: UserlistComponent },
      { path: 'userlist', component: MerchantComponent }
    ]),
    ToastrModule.forRoot()
  ]
})
export class DashboardModule { }
