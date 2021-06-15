import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreditCardValidation';

  constructor(private router:Router){}

    addMore(pageName:string):void{
      this.router.navigate([`${pageName}`])
    }
  
}
