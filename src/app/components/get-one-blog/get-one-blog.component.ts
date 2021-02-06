import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-get-one-blog',
  templateUrl: './get-one-blog.component.html',
  styleUrls: ['./get-one-blog.component.css']
})
export class GetOneBlogComponent implements OnInit {
   blog:Blog|null=null;
  
  constructor(private router:ActivatedRoute,private blogService:BlogService) {
    
    this.router.params.subscribe(r=>{
     this.blogService.getBlog(r.id).subscribe(data=>{
       this.blog = data;
       
     })
    })

  }




  ngOnInit(): void {
    

  }


}
