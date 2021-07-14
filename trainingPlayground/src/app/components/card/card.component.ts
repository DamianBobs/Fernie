import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public demoContainer = new Container();

  constructor() { }

  ngOnInit(): void {
    var demoContainer = new Container();
    demoContainer.Id = 'e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8';
    demoContainer.containerNumber = 'HMMU6277266'
    demoContainer.Status = 'Empty Returned'
    demoContainer.etd = '01242021';
    demoContainer.eta = '03292021';
  }

}
