import { Injectable } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {
  public containerList: Container[] = [];

  constructor(private httpClient: HttpClient) {

    // this.containerList.push(demoContainer);
    // this.containerList.push(demoContainer);
    // this.containerList.push(demoContainer);
    // console.log(demoContainer);
    // console.log(this.containerList);
  }

  // public getContainers(num: number): Observable<string> {
  //   let requestURL = `${environment.apiBaseURL}/test/string/${num}`;
  //   return this.httpClient.get<string>(requestURL);
  // }

  public getContainers(): Observable<Container[]> {
    let requestURL = `${environment.apiBaseURL}/container/containerList`;

    https://localhost:5001/api/container/containerList

    return this.httpClient.get<Container[]>(requestURL);
  }
}
