import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  timeSlots = [
    {
      slotId: '1',
      title: '9 AM - 10 AM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '2',
      title: '10 AM - 11 AM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '3',
      title: '11 AM - 12 AM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '4',
      title: '12 AM - 1 PM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '5',
      title: '1 PM - 2 PM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '6',
      title: '2 PM - 3 PM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '7',
      title: '3 PM - 4 PM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    },
    {
      slotId: '8',
      title: '4 PM - 5 PM',
      detail: {
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      isSelected: false
    }];
  constructor(private http: Http) { }

  getTimeSlots() {
    return this.timeSlots;
  }

  getSingleTimeslot(id) {
    const itemIndex = this.timeSlots.findIndex(item => item.slotId === id);
    return this.timeSlots[itemIndex];
  }

  updateTimeSlot(updatedTimeSlot) {
    const itemIndex = this.timeSlots.findIndex(item => item.slotId === updatedTimeSlot.id);
    this.timeSlots[itemIndex] = updatedTimeSlot;
  }
}
