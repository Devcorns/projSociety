import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-file-complaint',
  templateUrl: './file-complaint.component.html',
  styleUrls: ['./file-complaint.component.css']
})
export class FileComplaintComponent implements OnInit {
  toppings = new FormControl();
  
    toppingList = [
      {value:0,issue:"Water"},
      {value:1,issue:"Electricity"},
      {value:2,issue:"Furniture"},
      {value:3,issue:"Other"},

    ];
  constructor() { }

  ngOnInit() {
  }

}
