import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


// ngOnChanges(){
//   console.log("ngOnChanges");
// }
// ngOnInit(){
//   console.log("ngOnInit second called ");
// }
// ngDoCheck(){
//   console.log("ngDoCheck third called");
// }

// ngAfterContentInit(){
//   console.log("ngAfterContentInit fourth called");
// }
// ngAfterContentChecked(){
//   console.log("ngAfterContentChecked fifth called");
// }
// ngAfterViewInit(){
//   console.log("ngAfterViewInit sixth called");
// }
// ngAfterViewChecked(){
//   console.log("ngAfterViewChecked seventh called");
// }
// ngOnDestroy(){
//   console.log("ngOnDestroy");
// }
constructor(){
  console.log("constructor first called before initialization")//
}

}
