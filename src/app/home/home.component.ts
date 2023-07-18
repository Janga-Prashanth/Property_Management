import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
// import { PropertyDetailsComponent } from '../property-details/property-details.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private api : ApiService,
    // private dialog : MatDialog,
    private route: Router){}

    ngOnInit(): void {
      this.getallproperty();
    }

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

  // getproductinfo(row:any) {
  //   const dialogRef2=this.dialog.open(PropertyDetailsComponent, {      
  //     width:'30%',
  //     height: '100%',
  //     position: { right: '0' },
  //     data:row     //sending related row value to  MAT_DIALOG_DATA
  //   });
  // }

  getproduct(id:number){
    let dialogref= this.route.navigate(['/propertydetails',id])
    console.log(dialogref);
  }

}
