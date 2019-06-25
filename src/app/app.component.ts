import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people = []

  timeIn(fname, lname) {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    const today = mm + '/' + dd + '/' + yyyy;
    if (!fname || !lname) {
    } else {
      const person = { name: lname + ", " + fname, date: today, timein: this.myDate(), timeout: "0:00" };
      this.people.push(person);
    }
  }

  timeOut(index) {
    this.people[index].timeout = this.myDate();

  }
  myDate() {

    var date = new Date();
    var number = date.getMinutes().toString();
    var time = null;
    if (number.length == 2) {
      time = (date.getHours() % 12 || 12) + ":" + date.getMinutes();
    } else {
      time = (date.getHours() % 12 || 12) + ":" + "0" + date.getMinutes();
    }
    return time;
  }
}