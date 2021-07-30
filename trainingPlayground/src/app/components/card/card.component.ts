import { Component, OnInit, Input } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContainerServiceService } from '../../services/container-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public container: Container;
  public drawerStatus = 'VIEW MORE';
  public numberToString: string;
  drawerOpen = true;
  darkMode = false;
  colorA = 'red';

  constructor(public containerService: ContainerServiceService) { }

  ngOnInit(): void {
    this.container = new Container(this.container);
    // lets figure out which if to get rid of
    if(!this.container){
      this.container = new Container(demoContainer);
    }
    if(this.container.Id == null || this.container.Id == '') {
      this.container = new Container(demoContainer);
    }
    // if(!this.drawerOpen) {
    //   this.drawerStatus == 'nln'
    // }
  }

  test() {
    alert('Button was clicked');
  }

  changeColor(): void{
    // this.darkMode = !this.darkMode;
    this.colorA =  this.darkMode ? '$primary-blue' : '$secondary-blue';
  }

  // public testController(num: number): string{
  //   console.log('working', num);
  //   this.containerService.getContainers(num).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.numberToString = res;
  //     }
  //   );
  //   console.log(this.numberToString);
  //   return this.numberToString;
  // }

  

  // openDrawer() {
  //   this.drawerOpen = !this.drawerOpen;
  //   this.drawerStatus =  this.drawerOpen ? 'VIEW MORE' : 'VIEW LESS';
  // }
}
