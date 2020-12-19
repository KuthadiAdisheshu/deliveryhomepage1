import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsalesComponent } from './delivery/addsales/addsales.component';
import { BookeComponent } from './delivery/booke/booke.component';
import { BookingComponent } from './delivery/booking/booking.component';
import { ClosingstockComponent } from './delivery/closingstock/closingstock.component';
import { DealerComponent } from './delivery/dealer/dealer.component';
import { DealerpageComponent } from './delivery/dealerpage/dealerpage.component';
import { InvoiceComponent } from './delivery/invoice/invoice.component';
import { ManagementComponent } from './delivery/management/management.component';
import { ProductComponent } from './delivery/product/product.component';
import { SecondtableComponent } from './delivery/secondtable/secondtable.component';
import { TableComponent } from './delivery/table/table.component';

const routes: Routes = [
  {path:'',redirectTo:"management",pathMatch:"full" },
{path:'management',component:ManagementComponent},
{path:'table',component:TableComponent},
{path:'secondtable',component:SecondtableComponent},
{path:'closingstock',component:ClosingstockComponent},
{path:'product',component:ProductComponent},
{path:'addsales',component:AddsalesComponent},
{path:'invoice',component:InvoiceComponent},
{path:'dealerpage',component:DealerpageComponent},
{path:'dealer',component:DealerComponent},
{path:'booking',component:BookingComponent},
{path:'booke',component:BookeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
