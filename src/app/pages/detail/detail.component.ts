import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailService } from 'src/app/services/user-detail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isSubmitted = false;
  selectedTimeSlot = {};
  apoitmentDetailForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private userDetailservice: UserDetailService) { }

  ngOnInit() {
    this.selectedTimeSlot = this.userDetailservice.getSingleTimeslot(this.route.snapshot.params._id);
    this.apoitmentDetailForm = new FormGroup({
      firstName: new FormControl(this.selectedTimeSlot['detail'].firstName, Validators.required),
      lastName: new FormControl(this.selectedTimeSlot['detail'].lastName, Validators.required),
      phoneNumber: new FormControl(this.selectedTimeSlot['detail'].phoneNumber, Validators.required),
    });
  }

  saveUserDetail() {
    this.isSubmitted = true;
    if (this.apoitmentDetailForm.valid) {
      this.modifySelectedTimeSlot();
      this.userDetailservice.updateTimeSlot(this.selectedTimeSlot);
      this.apoitmentDetailForm.reset();
      this.onCancel();
    }
  }

  modifySelectedTimeSlot() {
    this.selectedTimeSlot['detail'].firstName = this.apoitmentDetailForm.controls.firstName.value;
    this.selectedTimeSlot['detail'].lastName = this.apoitmentDetailForm.controls.lastName.value;
    this.selectedTimeSlot['detail'].phoneNumber = this.apoitmentDetailForm.controls.phoneNumber.value;
    this.selectedTimeSlot['isSelected'] = true;
  }

  onCancel() {
    this.router.navigate(['./']);
  }
}
