import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.css']
})
export class AuthWrapperComponent implements OnInit {

  autenticatedUser=false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(data => {
      this.setAutenticated(data!=null);
      console.log("data:");
      console.log(data);
      console.log("autenticated variable:")
      console.log(this.autenticatedUser);

    });
  }

  authStateSuscribe(data){
    this.setAutenticated(data!=null);
    console.log("data:");
    console.log(data);
    console.log("autenticated variable:")
    console.log(this.autenticatedUser);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  toggleAutenticated(){
    this.setAutenticated(!this.autenticatedUser);
  }
  setAutenticated(b){
    this.autenticatedUser=b;
  }
}
