import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.myForm = this.fb.group({
      holder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expdate: ['', Validators.required],
      cvv: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  onSubmit() {
    console.warn(this.myForm.value);
    this.myForm.reset();
  }
  get holder(){
    return this.myForm.get('holder')
  }
  get cardNumber(){
    return this.myForm.get('cardNumber')
  }
  get expdate(){
    return this.myForm.get('expdate')
  }
  get cvv(){
    return this.myForm.get('cvv')
  }
  get amount(){
    return this.myForm.get('amount')
  }
}