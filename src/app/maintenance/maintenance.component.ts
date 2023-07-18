import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDetailsComponent } from '../property-details/property-details.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit{

  ngOnInit(): void {
    this.getmaintenance();
  }

  constructor(private api:ApiService,
     private dialog : MatDialog){}

  allmaintenance:any;
  getmaintenance(){
    this.api.getmaintenance().subscribe({
      next : (res :any)=>{
        this.allmaintenance = res;
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
