import { Component, OnInit } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public demoContainer: Container = demoContainer;

  constructor() { }

  ngOnInit(): void {
  }

}
