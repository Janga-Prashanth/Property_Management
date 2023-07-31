import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']//["div{margin: 10px 0px; width:50%; text-align:end; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}"]
})
export class PropertyDetailsComponent implements OnInit{

  constructor(private api:ApiService,
               private route:ActivatedRoute,
               private router : Router){}

    ngOnInit() : void{

      this.navbar();

      const id = +this.route.snapshot.paramMap.get('id');
      // console.log(id)

      this.route.paramMap.subscribe(
        param=>{
          let nam=+param.get("id");
          console.log(+param.get("id"))
          this.getproduct(nam)
        }
      )
    }

  property:any;
  getproduct(id: number) {
    this.api.getproperty(id).subscribe((data : any) =>{
    this.property = data;
    // console.log(this.property);
    } )
  }

  deleteproperty(id: number) {
    this.api.deleteproperty(id).subscribe((data : any) =>{
      alert("Property Removed Successfully")
      this.router.navigate(['/properties'])
    } )
  }

  homec = false;

  navbar(){
    this.router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url.includes('/properties')){
            this.homec=true
          }
          else{
            this.homec=false
          }
        }
      }
    )
  }
}
