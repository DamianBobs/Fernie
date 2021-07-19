import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  hasDepartedTF = false;
  hasArrivedTF = false;
  isExpectedTF = false;

  constructor() { }

  ngOnInit(): void {
  }

  statusColor() {

  }

}
