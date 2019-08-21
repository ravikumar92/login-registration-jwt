import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


import { UserService } from '../../shared/user.service';



@Component({
    selector: 'app-forget-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
  })
  export class ResetPasswordComponent implements OnInit {
  
    constructor(private userService: UserService,private router : Router) { }
  
    serverErrorMessages: string;
    ngOnInit() {
      if(this.userService.isLoggedIn())
      this.router.navigateByUrl('/userprofile');
    }
  
    onSubmit(form : NgForm){
    
    }
  
  }
  