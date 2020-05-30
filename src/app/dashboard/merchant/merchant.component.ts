import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from './../../http.service';
import { HttpClient } from '@angular/common/http';
import { Angular2CsvService } from 'angular2-csv';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  userdata: [];
  term: string;
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['user id', 'full name', 'Mobile Number', 'Category Selected', 'Email', 'City', 'Zipcode', 'Gender', 'DOB', 'Valid'],
    showTitle: true,
    title: 'User data download',
    useBom: false,
    removeNewLines: true,
    keys: ['userid', 'fullname', 'mobilenumber', 'categoryselected', 'email', 'city', 'zipcode', 'gender', 'dob', 'valid']
  };

  constructor(private toaster: ToastrService,
    private httpservice: HttpService,
    private _httpClient: HttpClient,
    private Angular2CsvService: Angular2CsvService,
    public router: Router,
    public route: ActivatedRoute, ) { }

  ngOnInit(): void {
  }

  public getuserData() {
    this.httpservice.getUserData().subscribe((apiData) => {
      if (apiData.status == 200) {
        this.userdata = apiData.data
        console.log(this.userdata)
        this.toaster.success('Data Fetched')
      } else {
        this.toaster.error(`${apiData.message} status code ${apiData.status}`)
      }
    }, (err) => {
      this.toaster.error('some error occured');
    })
  }
}
