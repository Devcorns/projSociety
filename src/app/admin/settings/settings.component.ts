import { Component, OnInit } from '@angular/core';
import { SettingSenderService } from "./setting-sender.service";
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';



@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [SettingSenderService]
})
export class SettingsComponent implements OnInit {
    issueForm: FormGroup;
    issueSelectedForm: FormGroup;
    issueCheckBox = [];


    constructor(private settingService: SettingSenderService, public fb: FormBuilder) {

        this.issueForm = this.fb.group({
            issueType: new FormControl("", Validators.required)
        });

        this.issueSelectedForm = this.fb.group({
            issueTypes: this.fb.array([])
        });


    }

    addIssueType(val): void {
        let array:FormArray = this.issueSelectedForm.get('issueTypes') as FormArray;
        array.push(new FormControl(val));
    }

    ngOnInit() {

        this.settingService.showIssues().subscribe(result => {

            for (var i = 0; i < result.length; i++) {
                if (result[i].issueType != undefined) {
                    this.addIssueType(result[i].issueType);
                    //this.issueCheckBox.push(result[i].issueType);
                }

            }
            console.log(this.issueCheckBox);
        })


    }




    issueEntry(data) {

        this.settingService.saveIssueEntry(data).subscribe(result => {

            console.log(result);

        }, err => {
            console.log(err);
        })

    }
    selectIssue() {
        console.log(this.issueSelectedForm.value);
    }

}
