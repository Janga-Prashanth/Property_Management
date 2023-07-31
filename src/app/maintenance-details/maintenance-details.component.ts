import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.scss']
})
export class MaintenanceDetailsComponent {

  constructor(private api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id)

    this.route.paramMap.subscribe(
      param => {
        let nam = +param.get("id");
        console.log(+param.get("id"))
        this.getproduct(nam)
      }
    )
  }

  property: any;
  getproduct(id: number) {
    this.api.getmaintenancestatus(id).subscribe((data: any) => {
      this.property = data;
      // console.log(this.property);
    })
  }

}
