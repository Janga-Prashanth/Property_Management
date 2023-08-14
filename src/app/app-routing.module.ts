import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancialComponent } from './financial/financial.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ManagementComponent } from './management/management.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { auth1Guard } from './gaurds/auth1.guard';


const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'homedetails/:id', component: PropertyDetailsComponent },
    ]
  },
  {
    path: 'properties', 
    component: ManagementComponent,
    canActivate: [auth1Guard],
    children: [
      { path: 'propertydetails/:id', component: PropertyDetailsComponent },
    ]
  },
  {
    path: 'tenant',
    component: TenantsComponent,
    canActivate: [auth1Guard],
    children: [
      { path: 'tenantdetails/:id', component: TenantDetailsComponent }
    ]
  },
  {
    path: 'maintenance', 
    component: MaintenanceComponent,   
    canActivate: [auth1Guard], 
    children: [
      { path: 'maintenancedetails/:id', component: MaintenanceDetailsComponent }
    ]
  },
  { path: 'finance', 
  component: FinancialComponent,
  canActivate: [auth1Guard],
 },
  { path: '**', component:NotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
