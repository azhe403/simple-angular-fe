import {Component, OnInit} from '@angular/core';
import {sha256} from "js-sha256";
import * as moment from "moment";

@Component({
  selector: 'app-hashing',
  templateUrl: './hashing.component.html',
  styleUrls: ['./hashing.component.scss']
})
export class HashingComponent implements OnInit {

  beforeHash: string
  afterHash: string

  constructor() {
    this.beforeHash = ''
    this.afterHash = ''
  }

  ngOnInit(): void {
  }

  doHashing() {
    const current_date = new Date();
    const format_date = moment(current_date).format('DDMMYYYY')
    const name = 'azhe403'
    const gender = 'male'
    const company = 'wintendev'
    const combined = format_date + name + gender + company

    console.log('before hash', combined)

    const hashed = sha256(combined)
    console.log('after hash', hashed)

    this.beforeHash = combined
    this.afterHash = hashed
  }
}
