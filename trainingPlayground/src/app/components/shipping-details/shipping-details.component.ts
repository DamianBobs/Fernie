import { Component, OnInit, Input } from '@angular/core';
import { ShippingLeg, ShippingStop } from 'src/app/models/container.model';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  @Input() public legs: ShippingLeg[];

  public stops: ShippingStop[] = [];
  // hasDepartedTF = false;
  // hasArrivedTF = false;
  // isExpectedTF = false;

  constructor() { }

  ngOnInit(): void {
    this.legs.forEach((leg) => {
      let stop = new ShippingStop();
      stop.leg = leg;
      stop.hasDeparted = leg.atd ? true : false;
      stop.hasArrived = leg.ata ? true : false;
      stop.isExpected = (!leg.ata && !leg.atd) ? true : false;
      stop.currentLeg = (leg.atd && !leg.ata) ? true : false;
      this.stops.push(stop);
    });
  }

  statusColor() {

  }

}
