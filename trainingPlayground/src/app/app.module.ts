import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContainerListComponent } from './components/containerList/container-list.component';
import { ContainerDetailComponent } from './components/container-detail/container-detail.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { ShipDetailsTabComponent } from 'src/app/components/ship-details-tab/ship-details-tab.component';
import { DeclarationDetailsComponent } from './components/declaration-details/declaration-details.component';

import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContainerListComponent,
    ContainerDetailComponent,
    ShippingDetailsComponent,
    ShipDetailsTabComponent,
    DeclarationDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, 
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
