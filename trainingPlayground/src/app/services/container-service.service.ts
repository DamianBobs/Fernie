import { Injectable } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';


@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {
  public containerList: Container[];

  constructor() {
    this.containerList.push(demoContainer);
    this.containerList.push(demoContainer);
    this.containerList.push(demoContainer);
    console.log(demoContainer);
    console.log(this.containerList);
  }

  getContainers() {
    return this.containerList;
  }
}
