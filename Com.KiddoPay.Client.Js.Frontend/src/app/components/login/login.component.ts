import { Component, OnInit } from '@angular/core';
import { UserManager } from 'oidc-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  manager: UserManager;

  constructor() {
    this.manager = new UserManager({
      authority: "http://localhost:5000",
      client_id: "com.kiddopay.clients.js.frontend",
      scope: "openid profile com.kiddopay.payment",
      redirect_uri: "http://localhost:4200/login/callback",
      response_type: "id_token token",
      post_logout_redirect_uri: "http://localhost:4200"
    });
  }

  ngOnInit() {
    this.manager.getUser()
      .then(user => {
        if (user) {
          console.log("User logged in", user.profile);
        }
        else {
          console.log("User not logged in");
        }
      })
  }

  login() {
    this.manager.signinRedirect();
  }
}
