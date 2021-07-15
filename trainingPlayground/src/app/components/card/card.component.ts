import { Component, OnInit, Input } from '@angular/core';
import { Container } from 'src/app/models/container.model';
import { demoContainer } from '../../models/container.model';
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
    if(!this.container){
      this.container = new Container(demoContainer);
    }
    console.log(this.container.status);
  }

}
