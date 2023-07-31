import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent {

  constructor(private api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id)

    this.route.paramMap.subscribe(
      param => {
        let nam = +param.get("id");
        console.log(+param.get("id"))
        this.gettenant(nam)
      }
    )
  }

  property: any;
  gettenant(id: number) {
    this.api.gettenant(id).subscribe((data: any) => {
      this.property = data;
      // console.log(this.property);
    })
  }

}
