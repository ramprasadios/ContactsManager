import { Component } from '@angular/core';
import { LoginComponent } from './Login/login.component';

@Component({
  selector: 'app-root',
  // template: '<contact-login></contact-login>'
  template: 
  `<div class="container-fluid">
  <router-outlet></router-outlet>
</div>`
})
export class AppComponent {
  title = 'Contacts Manager';
}
