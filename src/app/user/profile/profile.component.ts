import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FileUploadService } from '../../services/file-upload/file-upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[FileUploadService]
})
export class ProfileComponent implements OnInit {

  fileUploadForm:FormGroup;
  userProfile:FormGroup;
  userProfileDefault:FormGroup;


  constructor(private fileUploadServiceObj:FileUploadService,private fb:FormBuilder) { 
    this.fileUploadForm = this.fb.group({
      profilePicUpload:new FormControl("")
    });
    this.userProfile = this.fb.group({
     
      userage:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      mobile:new FormControl("",[Validators.required]),
      memberinflat:new FormControl("",[Validators.required])
    });
    this.userProfileDefault = this.fb.group({
      
       username:new FormControl({value: '', disabled: true}),
       regname:new FormControl({value: '', disabled: true}),
       occupiedby:new FormControl({value: '', disabled: true}),
       tenantname:new FormControl({value: '', disabled: true})
      
     });

  }

  profilePic;
  ngOnInit() {
  }


  onFileSelected(event){
    console.log(event.srcElement.value);
    
  }
  fileupload(data){
    console.log(data);
  }
  updateProfile(updatedData){
    console.log(updatedData);
  }

}
