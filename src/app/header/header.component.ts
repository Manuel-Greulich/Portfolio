import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  mobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.remove('d-none');
  }

  closeMobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('d-none');
  }

  openSkills() { 
    this.closeMobileNavbar();
  }

  openmyWork() { 
    this.closeMobileNavbar();
  }

  openAbout() {
    this.closeMobileNavbar();
  }

  openContact() {
    this.closeMobileNavbar();
  }

}
