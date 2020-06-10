import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  nombre:String='';
  apellido:String='';
  direccion:String='';
  var1=true;
  otherVar=true;
  
  hacerAlgo(){
    alert("Bienvenido");
  }
  hacerAlgo2(){
    alert("UTP");
  }
}
