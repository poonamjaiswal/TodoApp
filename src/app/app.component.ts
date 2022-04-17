import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-kart';
  constructor(){
    // setTimeout(() => {
    //   this.title='it changed';
    // }, 5000);
  }
}
