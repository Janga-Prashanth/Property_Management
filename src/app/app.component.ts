import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Property_Management';

  homec = false;

  constructor(private router: Router){
    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/managing' || val.url=='/tenant' || val.url=='/maintenance' || val.url=='/finance'){
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
