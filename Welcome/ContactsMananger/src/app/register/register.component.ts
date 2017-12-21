import { Component } from '@angular/core';

@Component({
    selector: 'contact-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    pageTitle: string = "Register"

    onRegisterButtonTap(value: any): void {
        alert("user register tapped");
    }
}