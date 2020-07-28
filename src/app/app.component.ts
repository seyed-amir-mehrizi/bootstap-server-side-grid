import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstarp-crud';

  headreArray=["name", "last-name", "email"];


  data = [
    {name:"amir" , lastName:"Mehrizi" , email:"amir@mehrizi"},
    {name:"ali" , lastName:"vatani" , email:"alio@vvv"},
    {name:"hasan" , lastName:"hasani" , email:"h@h"},

  ]




}
