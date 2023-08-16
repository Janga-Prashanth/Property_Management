import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.navbar();
  }
  title = 'Property_Management';

  homec : boolean;

  constructor(private router: Router){}

  navbar(){
    this.router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url.includes('/home') || val.url==('/')){   //(val.url=='/home')
            this.homec=false;
          }
          else{
            this.homec=true;
          }
        }
      }
    )
  }

}
