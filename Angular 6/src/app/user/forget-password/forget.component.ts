import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


import { UserService } from '../../shared/user.service';



@Component({
    selector: 'app-forget-password',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.css']
  })
  export class ForgetPasswordComponent implements OnInit {
  
    showSucessMessage: boolean;
    serverErrorMessages: string;
    model ={
      email :'',
    };

    constructor(private userService: UserService,private router : Router) { }
  
    ngOnInit() {
      if(this.userService.isLoggedIn())
      this.router.navigateByUrl('/userprofile');
    }
  
    onSubmit(form : NgForm){
      this.userService.resetPassword(form.value).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        })
    }
  
  }
  