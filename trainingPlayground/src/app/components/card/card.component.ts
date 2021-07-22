import { Component, OnInit, Input } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public container: Container;
  public drawerStatus = 'VIEW MORE';
  drawerOpen = true;
  darkMode = false;
  colorA = 'red';

  constructor() { }

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

  // openDrawer() {
  //   this.drawerOpen = !this.drawerOpen;
  //   this.drawerStatus =  this.drawerOpen ? 'VIEW MORE' : 'VIEW LESS';
  // }
}
