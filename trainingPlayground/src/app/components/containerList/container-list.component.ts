import { Component, OnInit } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';
import { ContainerServiceService } from 'src/app/services/container-service.service';
import { ContainerDetailComponent } from '../container-detail/container-detail.component';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})

export class ContainerListComponent implements OnInit {
  //TODO: page was throwing an error because containerList was declared, but not instantiated, when we tried to push demo containers onto it
  public containerList: Container[] = [];

  constructor(
    containerServiceService: ContainerServiceService
  ) {
    this.containerList = containerServiceService.getContainers();
  }

  ngOnInit(): void {

  }

}
