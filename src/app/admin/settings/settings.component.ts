import { Component, OnInit } from '@angular/core';
import { SettingSenderService } from "./setting-sender.service"

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers:[SettingSenderService]
})
export class SettingsComponent implements OnInit {

  constructor(private settingService:SettingSenderService) { }

  ngOnInit() {
  }

}
