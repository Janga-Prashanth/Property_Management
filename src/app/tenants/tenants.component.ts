import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDetailsComponent } from '../property-details/property-details.component';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit {

  constructor(private api: ApiService,
             private dialog: MatDialog){}
  
  ngOnInit(): void {
    this.gettenants();
  }

  alltenants:any;
  gettenants(){
    this.api.gettenants().subscribe({
      next : (res :any)=>{
        this.alltenants = res;
        console.log(res);
      },
      error: (err) => {alert("Error While Fetching the data")}
    } 
    ) 
  }

  getproductinfo(row:any) {
    const dialogRef2=this.dialog.open(PropertyDetailsComponent, {      
      width:'30%',
      height: '100%',
      position: { right: '0' },
      data:row     //sending related row value to  MAT_DIALOG_DATA
    });
  }

}
