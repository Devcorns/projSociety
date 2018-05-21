import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-register-visitor',
  templateUrl: './register-visitor.component.html',
  styleUrls: ['./register-visitor.component.css']
})
export class RegisterVisitorComponent implements OnInit {
  
  relation = [
    {value: 'Company', viewValue: 'Company'},
    {value: 'Relation', viewValue: 'Relation'}
    
  ];
  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }



}

/**
 * 
 * 
 * https://www.youtube.com/watch?v=zgLgallOcCQ
 * 
 * for dialog
 */


