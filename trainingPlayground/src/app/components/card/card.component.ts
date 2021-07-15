import { Component, OnInit, Input } from '@angular/core';
import { Container } from 'src/app/models/container.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public container: Container;

  constructor() { }

  ngOnInit(): void {
    console.log(this.container);
    this.container = new Container(this.container);
    console.log(this.container.status);
  }

}
