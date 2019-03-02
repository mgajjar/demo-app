import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailService } from 'src/app/services/user-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  timeSlots = [];
  constructor(private router: Router, private userDetailservice: UserDetailService) { }

  ngOnInit() {
    this.timeSlots = this.userDetailservice.getTimeSlots();
  }

  routeToNextPage(id) {
    this.router.navigate(['detail', id]);
  }
}
