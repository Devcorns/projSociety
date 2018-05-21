import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-register-visitor',
  templateUrl: './register-visitor.component.html',
  styleUrls: ['./register-visitor.component.css']
})
export class RegisterVisitorComponent implements OnInit {
  panelOpenState: boolean = false;
  relation = [
    {value: 'Company', viewValue: 'Company'},
    {value: 'Relation', viewValue: 'Relation'}
    
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
