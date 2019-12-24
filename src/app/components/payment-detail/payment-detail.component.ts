import { Component, OnInit } from '@angular/core';
import { ApipaymentService } from '../../services/apipayment.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  constructor(
    private apiService: ApipaymentService
  ) {
    this.readEmployee();
  }
  submitted = false;
  Employee:any = [];

  ngOnInit() {
  }

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })

  }

  removeEmployee() {

  }
}
