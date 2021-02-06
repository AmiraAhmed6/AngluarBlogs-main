import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logform:FormGroup;
  user:User;
  constructor(private fb:FormBuilder,private userservice:UserService,private router:Router) { }
  onlogin(){
    this.userservice.Login(this.user).subscribe(
      a=>{
        console.log(a);
        alert("data valid");
        this.router.navigate(['home']);
      }
    );
  }
  ngOnInit(): void {
    this.logform=this.fb.group({
      UserName:['',[Validators.required,Validators.minLength(3)]],
      Password:['',[Validators.required,Validators.minLength(8),Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/')]],
    });
  }
   
}
