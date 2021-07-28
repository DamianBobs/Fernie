import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ContainerDetailComponent } from './components/container-detail/container-detail.component';
import { ContainerListComponent } from './components/containerList/container-list.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { ShipDetailsTabComponent } from './components/ship-details-tab/ship-details-tab.component';


const routes: Routes = [
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'container-list',
    component: ContainerListComponent
  },
  {
    path: 'container-detail/:containerId',
    component: ContainerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
