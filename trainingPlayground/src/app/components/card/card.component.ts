import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public demoContainer: Container;

  constructor() { }

  ngOnInit(): void {
    this.demoContainer = new Container();
    this.demoContainer.Id = 'e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8';
    this.demoContainer.containerNumber = 'HMMU6277266'
    this.demoContainer.Status = 'Empty Returned'
    this.demoContainer.etd = '01242021';
    this.demoContainer.eta = '03292021';
  }

}
