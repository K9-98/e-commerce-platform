import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {
  authState: any = null;

  constructor(private auth:AngularFireAuth,private router:Router) { }

  get authenticated():boolean{
    return this.authState !== null;
  }

  get currentUser():any{
    return this.authenticated ? this.authState : null;
  }

  get currentUserObservable():any{
    return this.auth.authState;
  }

  get currentUserId():string{
    return this.authenticated?this.authState.uid:"";
  }

  emailLogin(email:string,password:string){
    return this.auth.auth.signInWithEmailAndPassword(email,password)
      .then(user => (this.router.navigate(['/home'])));
  }

  googleLogin():void{
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => (this.router.navigate(['/home'])))
  }

  logout(){
    this.auth.auth.signOut();
    this.router.navigate(['/login']);
  }

  createUser(email:string,password:string){
    let isError:boolean = false;
    this.auth.auth
      .createUserWithEmailAndPassword(email,password)
        .then(success=>{
          this.router.navigateByUrl("/login");
        })
        .catch(err =>{
          isError = true;
          if(err.message === "The email address is already in use by another account."){
            alert(err.message);
          }else{
            console.log(err.message);
          }
        })
  }

  verifyEmail(){
    // this.auth.auth.currentUser
    //   .sendEmailVerification()
    //     .then(msg=> alert("Password Successfully Reset"))
  }

  resetPassword(){
    //...
  }

  

}
