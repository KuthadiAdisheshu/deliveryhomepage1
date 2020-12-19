import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './delivery/management/management.component';
import { TableComponent } from './delivery/table/table.component';
import { SecondtableComponent } from './delivery/secondtable/secondtable.component';
import { ClosingstockComponent } from './delivery/closingstock/closingstock.component';
import { ProductComponent } from './delivery/product/product.component';
import { AddsalesComponent } from './delivery/addsales/addsales.component';
import { InvoiceComponent } from './delivery/invoice/invoice.component';
import { DealerpageComponent } from './delivery/dealerpage/dealerpage.component';
import { DealerComponent } from './delivery/dealer/dealer.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './delivery/booking/booking.component';
import { BookeComponent } from './delivery/booke/booke.component';
// import { DealerComponent } from './dealer/dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    TableComponent,
    SecondtableComponent,
    ClosingstockComponent,
    ProductComponent,
    AddsalesComponent,
    InvoiceComponent,
    DealerpageComponent,
    DealerComponent,
    BookingComponent,
    BookeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  
    
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
