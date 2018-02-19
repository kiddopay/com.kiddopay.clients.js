import { Component, OnInit } from '@angular/core';
import { UserManager } from 'oidc-client';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
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
    this.manager.signinRedirectCallback()
      .then(() => {
        console.log("logged in");
      })
      .catch(function (e) {
        console.error(e);
      });
  }

}
