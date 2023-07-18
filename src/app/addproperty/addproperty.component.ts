import { Component, OnInit, Inject } from '@angular/core';         
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { every } from 'rxjs';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class ApppropertyComponent implements OnInit {

  constructor(private dialogref: MatDialogRef<ApppropertyComponent>,
                private fb: FormBuilder,
                private api: ApiService,
                 @Inject(MAT_DIALOG_DATA) public editdata: any,){}


  ngOnInit(): void {
    this.initUserForm();
    this.getpropertytype();
    this.getnearby();
  }

  onNoClick() {
    this.dialogref.close();
  }

  propertyform !: FormGroup;
  initUserForm(): void {
    this.propertyform = this.fb.group({
      id: [],
      img: ["../assets/images/Rectangle 93 (5).png"],
      name: [null, [Validators.required]],
      address: this.fb.group({
        street_name: ["4517", [Validators.required]],
        city: ["Washington Ave", [Validators.required]],
        state: ["Manchester", [Validators.required]],
        zip_code: ["39495", [Validators.required]],
      },),
      status: ["Available", [Validators.required]], 
      property_type: [null],
      rent: [1200, [Validators.required]], 
      outsatnading_payment: ["Nill"],
      tenant_details: ["Kathryn Murphy tanya.hill@example.com (225) 555-0118"],
      lease_details: ["August 9, 2023 - August 8, 2025"], 
      maintainance_request: ["nill"],
      nearby_places: [null],             
      description: [null],      
    });
  }

  addproperty() {
    if (this.propertyform.valid) {
      this.api.postproperty(this.propertyform.value).subscribe(
        {
          next: (res) => {
            alert("Property Added Successfully");
            this.propertyform.reset();
            this.dialogref.close('save');
          },
          error: () =>
            alert("Error While Adding the product")
        }
      )
    }
  }

  property_type:any;
  getpropertytype() {
    this.api.getpropertytype().subscribe((res) => {
      this.property_type = res;
    });
  }

  nearby:any;
  getnearby() {
    this.api.getnearbyplaces().subscribe((res) => {
      this.nearby = res;
    });
  }

  src="../assets/images/Rectangle 93 (5).png";

  onselectFile(e:any){
    if(e.target.files) {
    var reader = new FileReader();
    console.log(e.target.files[0])
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event: any)=>{
    this.src=event.target.result;
    }
    }
  }

//   fname:string="";
//   file:any;
  
//   getName(fname: string) {
//     this.fname= fname;
//   }
  
//   getFile(event: any) {
//     this.file = event.target.files[0];
//     console.log('file', this.file);
//     this.src=event.target.result;
//   }
  
//   submitdata() {
//     let formData = new FormData();
//     formData.set("name", this.fname)
//     formData.set("file", this.file)
//   this.api.upload(formData).subscribe(
//     (res)=>{
//       alert("success")})
// }
}