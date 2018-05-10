import { Component, OnInit } from '@angular/core';
import { SettingSenderService } from "./setting-sender.service";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers:[SettingSenderService]
})
export class SettingsComponent implements OnInit {
  issueForm:FormGroup;
  constructor(private settingService:SettingSenderService,public fb:FormBuilder) {
    this.issueForm = this.fb.group({
      issueType : new FormControl("",Validators.required)
    })

   }

  ngOnInit() {
  }

  issueEntry(data){

    this.settingService.saveIssueEntry(data).subscribe(result=>{

      console.log(result);

    },err=>{
      console.log(err);
    })
    
  }

}
