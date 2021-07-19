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
  public containerList: Container[] = [];

  constructor(
    containerServiceService: ContainerServiceService
  ) {
    this.containerList = containerServiceService.getContainers();
  }

  ngOnInit(): void {

  }

}
