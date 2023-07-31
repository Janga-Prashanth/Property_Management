import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MAT_DIALOG_DATA,MatDialogRef,MatDialog } from '@angular/material/dialog';
import { PropertyDetailsComponent } from '../property-details/property-details.component';
import {ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  condition=false;


  constructor(private api : ApiService,
    public dialog: MatDialog, 
    private route: ActivatedRoute, 
    private router: Router
    ){}


    currentDialog: MatDialogRef<any> = null;
    openDialog(tabvalue: number) {      
       this.currentDialog = this.dialog.open(PropertyDetailsComponent, {
        data: {tabvalue},
      });
    }

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

  getproductinfo() {
    const dialogRef2=this.dialog.open(PropertyDetailsComponent, {
      width:'30%',
      height: '100%',
      position: { right: '0' },
    });
  }

  // getproduct(id:number){
  //   let dialogref= this.route.navigatebyURL(['/propertydetails',id])
  //   console.log(dialogref);
  // }

  // setcondition(){
  //  this.condition=true;
  // }

}
