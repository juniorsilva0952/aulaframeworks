import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome= 'wilton';
  count=10;

 menos(){
  this.count = this.count--;
}

 mais(){
this.count = this.count++;
  
}
     } 