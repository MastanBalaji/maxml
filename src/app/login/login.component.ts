import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.signup= this.fb.group({
      firstname: [null ,Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z]*$/)])],
      lastname: [null ,Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z]*$/)])],
      gmail: [null ,Validators.compose([Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: [null ,Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern(/^[A-Za-z0-9]*$/)])],

    })
  }

  submit(){
    this._snackBar.open('Your details saved!!', 'Success', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
