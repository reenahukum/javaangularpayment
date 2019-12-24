import { Component, OnInit,  } from '@angular/core';
import { ApiaccountService } from '../../services/apiaccount.service'

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  constructor(
    private apiService: ApiaccountService
  ) {
    this.readEmployee();
  }
  submitted = false;
  Accounts:any = [];

  ngOnInit() {
  }

  readEmployee(){
    this.apiService.getAccounts().subscribe((data) => {
     this.Accounts = data;
    })

  }

  removeEmployee() {

  }
}
