import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'contact-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    pageTitle: string = "Login";

    constructor(private _router: Router) {

    }
    loginButtonAction(value: any): void {
        console.log(value);
        if ((value.userEmail != undefined) && (value.userEmail != "") && 
        ((value.password != undefined) && (value.password != ""))) {
            alert('user data ok');
            this._router.navigate(['/home']);
        } else {
            alert('Enter valid user name / password');
        }
    }

    registerNewUser(): void {
        this._router.navigate(['/register']);
    }

    forgotPassword(): void {
        alert("Forgot password tapped");
    }
}