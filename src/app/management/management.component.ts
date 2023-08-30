import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDetailsComponent } from '../property-details/property-details.component';
import { ApppropertyComponent } from '../addproperty/addproperty.component';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


interface WeatherForecast {
  name: string;
  temperatureC: number;
  rent: number;
  status: string;
  lease_details:string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  roleId!: string;
  public forecasts!: WeatherForecast[] ;
  public cacheForecasts !: WeatherForecast[] ;

  ngOnInit(): void {
    
    this.getallproperty();
    this.api.getproperties();
  }

  constructor(private api: ApiService,
    private dialog : MatDialog,
    private auths : AuthService,
    private router : Router){ this.api.getproperties();}

    allproperties:any;
    getallproperty(){
      this.api.getproperties().subscribe({
        next : (res :any)=>{
          this.allproperties = res;
          // console.log(res);
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

  status:string='';
  updatestatus(name: string): void {
    this.status = name;
    this.getallproperty();
}

addpdialog() {
  // this.router.navigate[('addproperty')];
  const dialogRef1=this.dialog.open(ApppropertyComponent, {
    disableClose: true,
    width:'100%',
    height:'90%',
    position: { bottom: '1' },
  });
  dialogRef1.afterClosed().subscribe(val=>{
    if(val == 'save'){
      this.getallproperty();  
    }
  })
}



}
