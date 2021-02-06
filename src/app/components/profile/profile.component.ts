import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import * as $ from "jquery";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   blogs:Blog[];
   user:User;
  constructor(private serviceUser:UserService , private router:Router) { 
   
    this.serviceUser.GetUserProfile().subscribe(data=>{
      this.user =data.result;
      this.blogs=data.Blogs;
    
    })

  }

  ngOnInit(): void {
    
  }

   getfollowing(userId:String){
    this.router.navigateByUrl(`user/view-user/${userId}`);
   }
}
