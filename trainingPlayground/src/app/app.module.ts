// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// MATERIAL
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContainerListComponent } from './components/containerList/container-list.component';
import { ContainerDetailComponent } from './components/container-detail/container-detail.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { ShipDetailsTabComponent } from './components/ship-details-tab/ship-details-tab.component';
import { DeclarationDetailsComponent } from './components/declaration-details/declaration-details.component';
import { DocumentsComponent } from './components/documents/documents.component';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContainerListComponent,
    ContainerDetailComponent,
    ShippingDetailsComponent,
    ShipDetailsTabComponent,
    DeclarationDetailsComponent,
    DocumentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, 
    MatToolbarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
