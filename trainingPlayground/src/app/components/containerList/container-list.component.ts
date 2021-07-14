import { Component, OnInit } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';


@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})

export class ContainerListComponent implements OnInit {
  public containerList: Container[] = [];
  public demoContainer = new Container(demoContainer);

  constructor() { }

  ngOnInit(): void {
    this.containerList.push(this.demoContainer);
    this.containerList.push(this.demoContainer);
    this.containerList.push(this.demoContainer);
    console.log(this.demoContainer);
    console.log(this.containerList);
  }

}
