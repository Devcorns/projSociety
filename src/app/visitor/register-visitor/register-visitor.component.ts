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
<<<<<<< HEAD
  visitorFormFirstCheck:FormGroup;

=======
  visitorFirstForm:FormGroup;
  checkTs=[
    {value:'first',viewValue:'first'},
    {value:'second',viewValue:'second'},
  ];
>>>>>>> 81e3ac7ccbe42918b0983de69f4e4e32be450efc
  relation = [
    {value: 'Company', viewValue: 'Company'},
    {value: 'Relation', viewValue: 'Relation'}
    
  ];
  
  constructor(
    public dialog:MatDialog,
    private fb:FormBuilder
<<<<<<< HEAD
  ) {
      this.visitorFormFirstCheck = this.fb.group({
        visitorName:new FormControl("",[Validators.required,Validators.minLength(3)])
      });


   }
=======
  
  
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
>>>>>>> 81e3ac7ccbe42918b0983de69f4e4e32be450efc

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



  submitFirstCheck(data){
    console.log(data.value);
  }




}




