import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styles: ["div{margin: 10px 0px; width:50%; text-align:end; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}"]
})
export class PropertyDetailsComponent implements OnInit{
  propertyd: any;

  constructor(private api:ApiService,
               private route:ActivatedRoute ){}

    ngOnInit() : void{

      const id = +this.route.snapshot.paramMap.get('id');
      this.getproduct(id);
      console.log(+this.route.snapshot.paramMap.get('id'))

      // this.route.paramMap.subscribe(
      //   param=>{
      //     let nam=+param.get("id");
      //     console.log(+param.get("id"))
      //     this.getproduct(+param.get("id"))         
      //   }
      // )
    }

  property:any;
  getproduct(id: number) {
    this.api.getproperty(id).subscribe((data : any) =>{
    this.property = data;
    console.log(this.property);
    } )
  }

}
