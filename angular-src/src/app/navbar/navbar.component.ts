import { Component, OnInit } from '@angular/core';
import { DataService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed: boolean = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor(private router: Router, private authService: DataService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessages.show('You are successfully logged out', { cssClass: 'alert-primary', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }

}
