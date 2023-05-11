import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isError = false;

  isSucess = false;

  user = ""
  pwd= ""

  login() {
  
    console.log("User = " + this.user + "Password = " + this.pwd )
    if( this.user == "sar4silv4" && this.pwd == "1234") { 
      this.isError = false; 
      this.isSucess = true
      console.log ("Login Aprovado")
     } else { 
      this.isError = true;
      this.isSucess = false;
     }
  }

 
  
}

