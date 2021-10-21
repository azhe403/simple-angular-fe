import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-array-learning',
  templateUrl: './array-learning.component.html',
  styleUrls: ['./array-learning.component.scss']
})
export class ArrayLearningComponent implements OnInit {

  dataRows: User[] = []

  constructor() {
    this.resetArray()
  }

  ngOnInit(): void {
  }

  valueChange(userId: any) {
    this.dataRows = this.dataRows.map(value => {
      if (value.userId == userId) {
        return {
          userId: value.userId,
          name: 'value changed'
        }
      } else {
        return value
      }
    })
  }

  resetArray() {
    this.dataRows = []

    for (let i = 0; i <= 10; i++) {
      this.dataRows.push({
        userId: i,
        name: 'User ' + i
      });
    }
  }
}
