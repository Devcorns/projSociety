import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-section',
  templateUrl: './dialog-section.component.html',
  styleUrls: ['./dialog-section.component.css']
})
export class DialogSectionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

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

