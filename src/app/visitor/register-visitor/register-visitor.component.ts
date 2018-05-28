import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray }  from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogSectionComponent } from '../dialog-section/dialog-section.component';


@Component({
  selector: 'app-register-visitor',
  templateUrl: './register-visitor.component.html',
  styleUrls: ['./register-visitor.component.css']
})
export class RegisterVisitorComponent implements OnInit {
  visitorFirstForm:FormGroup;
  checkTs=[
    {value:'first',viewValue:'first'},
    {value:'second',viewValue:'second'},
  ];
  relation = [
    {value: 'Company', viewValue: 'Company'},
    {value: 'Relation', viewValue: 'Relation'}
    
  ];
  
  constructor(
    public dialog:MatDialog,
    private fb:FormBuilder
  
  
  ) { 

    this.visitorFirstForm = this.fb.group({
      visitorname:new FormControl(),
visitorno:new FormControl(),
visitorid:new FormControl(),
visitoraddr:new FormControl(),
visitorrelation:new FormControl(),
visitorpurpose:new FormControl(),
visitorin:new FormControl(),
checkTs: new FormArray([])
    })

  }

  ngOnInit() {
  }


  animal: string;
  name: string;

  

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogSectionComponent, {
      width: '300px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  submitFirstForm(data){
    console.log(data);
  }





}




