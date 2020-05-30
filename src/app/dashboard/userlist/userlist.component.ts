import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from './../../http.service';
import { HttpClient } from '@angular/common/http';
import { Angular2CsvService } from 'angular2-csv';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  category: string;
  data: [];
  term: string;
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['address', 'category', 'city', 'createdon', 'email', 'fullname', 'imageuploaded', 'iscouponactive', 'merchantid', 'mobilenumber', 'shopname', 'valid', 'zipcode'],
    showTitle: true,
    title: 'Merchant data download',
    useBom: false,
    removeNewLines: true,
    keys: ['address', 'category', 'city', 'createdon', 'email', 'fullname', 'imageuploaded', 'iscouponactive', 'merchantid', 'mobilenumber', 'shopname', 'valid', 'zipcode']
  };
  constructor(private toaster: ToastrService,
    private httpservice: HttpService,
    private _httpClient: HttpClient,
    private Angular2CsvService: Angular2CsvService,
    public router: Router,
    public route: ActivatedRoute,
) { }

  ngOnInit(): void {
  }
  public getUserData() {
    this.httpservice.getMerchantData().subscribe((apiData) => {
      if (apiData.status == 200) {
        this.data = apiData.data
        // console.log(this.data)
        this.toaster.success('Data Fetched')
      } else {
        this.toaster.error(`${apiData.message} status ${apiData.status}`)
      }
    },(err) => {
      this.toaster.error('some error occured');
    })
  }

  public goToMerchantSection(){
    this.router.navigate(['/userlist/merchantdata'])
  }

}
