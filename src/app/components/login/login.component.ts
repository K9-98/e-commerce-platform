import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  pwd:string;
  form:FormGroup;

  constructor(fb:FormBuilder,private router:Router,private _authService: AuthenticationService) { 
    this.form = fb.group({
      email:['',Validators.email],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
   this._authService.emailLogin(this.username,this.pwd)
    .catch((error:Error)=>{
      var errorCode = error.name;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
