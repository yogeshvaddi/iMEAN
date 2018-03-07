import { Component, OnInit } from '@angular/core';
import { DataService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:DataService) { }

  ngOnInit() {
    
  }

}
