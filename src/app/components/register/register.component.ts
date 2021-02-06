import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 regform:FormGroup;
 user:User;
 img:string="/src/assets/Reg.PNG";
  constructor(private fb:FormBuilder,private userservice:UserService,private router:Router) { }
  onsubmit(){
    this.userservice.CreateUser(this.user).subscribe(
      a=>{
        console.log(a);
        alert("data valid");
        this.router.navigate(['home']);
      }
    );
  }
  //hello
  ngOnInit(): void {
    this.regform=this.fb.group({
      UserName:['',[Validators.required,Validators.minLength(3)]],
      Name:['',[Validators.required,Validators.minLength(3)]],
      Password:['',[Validators.required,Validators.minLength(8),Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/')]],
      Email:['',[Validators.required,Validators.pattern('/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/')]]
    });
  }

}
