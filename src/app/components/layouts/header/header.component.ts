import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Dashboard";    

  constructor(private sideNavService: SideNavService) {
  }

  clickMenu() { 
    this.sideNavService.toggle();
  }
  
  ngOnInit(): void {
  }

}
