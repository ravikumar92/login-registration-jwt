import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  numberRegex = /^([0-9]{10})/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  stateList:any;
  districtList:Array<Object> = [];
  

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.userService.getStates().subscribe(
      res => {this.stateList = res;}
    );
    
   
  }

  setStateCode(code){
    this.districtList = [];
    this.userService.getDistricts(code).subscribe(
      res => {this.districtList.push(res); console.log(res)}
    )
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  setGender(gender) {
    console.log(gender);
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      gender:'',
      phoneNo: '',
      password: '',
      state: '',
      district: '',
      agree: true
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
