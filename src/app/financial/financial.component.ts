import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  ngOnInit(): void {
    this.getfinance();
  }

  constructor(private api:ApiService){}

  finance: any;
  getfinance(){
    this.api.getfinance().subscribe({
        next : (res : any)=> {
          // console.log(res);
          this.finance=res;
        },
        error:(err)=> {
          alert("Error While Fetching the data")
        }
    })
  }

}
