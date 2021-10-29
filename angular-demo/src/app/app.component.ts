import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  user = {
    displayName: 'Zac',
    userType: 'user',
  };

  data = 'First State';
  changeMe() {
    this.data = 'Second State';
  }

  reload() {
    window.location.reload();
  }
}
