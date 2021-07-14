import { Component, OnInit, Input } from '@angular/core';
import { Container } from 'src/app/models/container.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public demoContainer: Container;

  constructor() { }

  ngOnInit(): void {
    console.log(this.demoContainer);
    this.demoContainer = new Container(this.demoContainer);
  }

}
