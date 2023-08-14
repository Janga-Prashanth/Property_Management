import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ManagementComponent } from './management/management.component';
import { TenantsComponent } from './tenants/tenants.component';
import { FinancialComponent } from './financial/financial.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ApiService } from './services/api.service';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatIconModule} from '@angular/material/icon';
import { ApppropertyComponent } from './addproperty/addproperty.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';              
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from './services/loader.service';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyDetailsComponent,
    ManagementComponent,
    TenantsComponent,
    MaintenanceComponent,
    FinancialComponent,
    SpinnerComponent,
    ApppropertyComponent,
    NavbarComponent,
    HomeComponent,
    PropertyDetailsComponent,
    TenantDetailsComponent,
    MaintenanceDetailsComponent,
    LoginComponent,
    NotfoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,    
    // RouterModule.forRoot(appRoute), 
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
  providers: [ApiService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
