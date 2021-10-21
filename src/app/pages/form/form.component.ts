import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  dataStorage: string | null;
  keySession = 'login-session'
  username: string;
  password: string;

  currentUser: string;

  constructor() {
    this.dataStorage = ''
    this.currentUser = ''
    this.username = ''
    this.password = ''

    this.loadSession()
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.dataStorage = JSON.stringify({
      user: this.username,
      password: this.password
    })

    this.currentUser = this.username

    localStorage.setItem(this.keySession, this.dataStorage)
  }

  doLogout() {
    localStorage.removeItem(this.keySession)

    this.currentUser = ''

    this.loadSession()
  }

  loadSession() {
    this.dataStorage = localStorage.getItem(this.keySession)

  }
}
