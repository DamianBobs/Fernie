import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContainerListComponent } from './components/containerList/container-list.component';
import { ContainerDetailComponent } from './components/container-detail/container-detail.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContainerListComponent,
    ContainerDetailComponent,
    ShippingDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
