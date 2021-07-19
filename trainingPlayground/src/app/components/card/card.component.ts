import { Component, OnInit, Input } from '@angular/core';
import { Container, demoContainer } from 'src/app/models/container.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public container: Container;
  drawerOpen = true;
  darkMode = false;
  colorA = 'red'

  constructor() { }

  ngOnInit(): void {
    this.container = new Container(this.container);
    console.log(this.container.status);
    if(this.container.Id == null || this.container.Id == '') {
      this.container = new Container(demoContainer);
    }
  }

  test() {
    alert('Button was clicked');
  }

  darkModeToggle() {
    // if(!this.darkMode){
    //   this.primaryColor = 'blue';
    // }
  }

}
